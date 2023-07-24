import React from "react";
import "./styles.css";
import { Message, ChatFeed } from "./react-chat-ui";
import Form from "./form";
import getPrompt from "./getPrompt.js"
import { useState, useEffect } from "react";
import Card_layout from "./Card_layout";

import ResultsPageSongs from "./resultsPageSongs";
const styles = {
  button: {
    backgroundColor: "#fff",
    borderColor: "#1D2129",
    borderStyle: "solid",
    borderRadius: 20,
    borderWidth: 2,
    color: "#1D2129",
    fontSize: 18,
    fontWeight: "300",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    outline: "none"
  },
  selected: {
    color: "#fff",
    backgroundColor: "#0084FF",
    borderColor: "#0084FF"
  }
};

const users = {
  0: "You",
  1: "Nella"
};

class Chat extends React.Component {
  constructor() {

    super();
    this.POSTsender = require('./postAnswers').default;
    this.musicEsStarter = require('./startMusicES').default;
    
   

    this.promptNum = -1;
    this.input = {answers: String};
    
    this.state = {
      messages: [
        new Message({ id: "0", message: " '1' for spotify \n'2' for housing", senderName: "Nella" }),
        
      ],
      useCustomBubble: false,
      curr_user: 0
    };

    this.chatState = true;
    this.resultsState = false;
    this.recommendations = [];
    this.introPromptFlag = true;
    
    this.housingMode = false;
    this.musicMode = false;

    this.musicEsStarter().then(
      ()=>console.log("ES-Music Started"));

  }

  fetchPrompt(){
    const prompt = require('./getPrompt').default;
    prompt().then(data => {

      //add prompt to chatfeed
      this.state.curr_user = 2
      const prevState = this.state;

      const newMessage = new Message({
      id: this.state.curr_user,
      message: data["prompt"],
      senderName: "Nella",
     
    });
    prevState.messages.push(newMessage);
    this.setState(this.state);
    });
  }


  onPress(user) {
    this.setState({ curr_user: user });
  }

  pushSong(song){
    this.state.curr_user = 2
    const prevState = this.state;
    const newMessage = new Message({
      id: this.state.curr_user,
      message: song,
      senderName: "You",
     
    });
    prevState.messages.push(newMessage);
    this.setState(this.state);
  }

  sendAnswer(){
    this.POSTsender(this.input)
      .then(data => { 
        this.recommendations = data;

        this.chatState = false;
        this.resultsState = false;
        this.fetchPrompt();
      })
      

  }



  //Called on form submit in form.js
  pushMessage(recipient, message) {
    
    //add to chat feed
    this.state.curr_user = 0;

    const prevState = this.state;

    const newMessage = new Message({
      id: this.state.curr_user,
      message,
      senderName: "You",
    });

    prevState.messages.push(newMessage);
    this.setState(this.state);

    //return message to backend
    if(this.introPromptFlag == false){
      this.input.answers = message;
      this.sendAnswer()
    } else
      {

        this.introPromptFlag = false;
        if(message === "1"){
          this.musicMode = true;
        }
        else if(message == "2"){
          this.housingMode = true;

        }else{
          console.log("invalid intial response");
        }
        this.fetchPrompt();
      
      }
    
  }

  

  render() {

    return (
<div class="parent"> 

  <Card_layout recs= {this.recommendations}>
    
    </Card_layout> 
  <div className="container">
    <div>
      <h1>
        Nella's Rocommendations
      </h1>
    </div>
      <div className="chatfeed-wrapper">
        <ChatFeed
          chatBubble={this.state.useCustomBubble}
          messages={this.state.messages} // Boolean: list of message objects
          showSenderName
        />
      </div>
      <div>
        <Form chat = {this}></Form>
      </div>
    </div>
  </div>   
      
    );
  }
}

export default Chat;
