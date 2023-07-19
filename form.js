import React, { useState } from 'react';


export default function Form({ chat}) {
    const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    chat.pushMessage("1", name)
    
    
  }


  

  return (
    <form onSubmit={handleSubmit}>

        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
      
      
    </form>
 );

 
}