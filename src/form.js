import React, { useState } from 'react';
import "./styles.css";

export default function Form({ chat}) {
    const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    chat.pushMessage("1", name)
    
    
  }


  

  return (
    <form onSubmit={handleSubmit}>
        <div class="input-group">
          <input 
            class = "form-control"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type a message..."
            className="message-input"
          />
          </div>
          <div>
          <button class="button-9" role="button">Button 9</button>
          </div>
          
        
      
      
    </form>
  );
}