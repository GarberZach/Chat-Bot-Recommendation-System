
from flask import Flask, request

from prompt_manager import PromptManager
from es_execute import  execute
from spotify import Spotify
from flask_cors import CORS
from es_manager import ESManager

app = Flask(__name__)
CORS(app)


es_instance = ESManager()
es_instance.set_up_index()
promptManager = PromptManager()

@app.route("/execute_es", methods=["POST"])
def execute_es():
    
    
    promptManager.build_new()
    

    resp = {"prompt": "es started"}

    return resp


@app.route("/get_prompt", methods=["GET"])
def get_prompt():

    prompt = promptManager.get_current_prompt()

    jsonData = {"prompt": prompt}
    print(jsonData)

    return jsonData

@app.route("/input", methods=["POST"])
def receive_input():
    response = request.json
    print(response["answers"])
    promptManager.response = response["answers"]
    promptManager.prompt_user()

    songList = execute(prompt_man=promptManager, es_man=es_instance)
    promptManager.prompt_number = promptManager.prompt_number + 1

    spotify = Spotify(songList)
    print(spotify)
    songs = spotify.search_ids()
    return songs


if __name__  == "__main__":
    app.run(debug=True, port=3001)
    
     