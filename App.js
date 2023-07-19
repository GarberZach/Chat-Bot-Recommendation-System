import React from "react";
import "./styles.css";
import { Message, ChatFeed } from "./react-chat-ui";
import Form from "./form";
import apiManager from "./api.js"
import { useState, useEffect } from "react";

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
    const APIManager = require('./api').default;
    APIManager().then(data => {
      this.prompts = data
      
    });

    this.promptNum = -1;
    this.inputs = {answers: []};
    
    this.state = {
      messages: [
        new Message({ id: "0", message: "say hi to nella", senderName: "Nella" }),
        
      ],
      useCustomBubble: false,
      curr_user: 0
    };

    this.chatState = true;
    this.resultsState = false;
    this.recommendations = [];
    

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
/*
  onMessageSubmit(e) {
    
    const input = this.message;
    e.preventDefault();
    if (!input.value) {
      return false;
    }
    this.pushMessage(this.state.curr_user, input.value);
    return true;
  }
*/
 
respond(){
  
  this.promptNum = this.promptNum + 1;
  if(this.promptNum === 8){
    this.POSTsender(this.inputs).then(data => {
      this.pushSong("Here are some songs you may like")
      data.songList.forEach(song => this.pushSong(song))
      data.songList.forEach(song => this.recommendations.push(song))
    });

    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(this.recommendations);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

    this.chatState = false;
    this.resultsState = true;
    
  }
  
  this.state.curr_user = 2
  const prevState = this.state;
  const newMessage = new Message({
    id: this.state.curr_user,
    message: this.prompts.prompts[this.promptNum],
    senderName: "Nella",
   
  });
  prevState.messages.push(newMessage);
  this.setState(this.state);
}

  pushMessage(recipient, message) {
    
    
    this.state.curr_user = 0
    const prevState = this.state;
    const newMessage = new Message({
      id: this.state.curr_user,
      message,
      senderName: "You",
     
    });
    prevState.messages.push(newMessage);
    this.setState(this.state);

    if(this.promptNum !== -1){
      this.inputs.answers.push(message)
    }
      
    this.respond();
  }

  

  render() {

    if (this.resultsState){
      return(
        <ResultsPageSongs recs = {this.recommendations}>

        </ResultsPageSongs>
        
        
      )
    }

    return (
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
      
    );
  }
}

export default Chat;
