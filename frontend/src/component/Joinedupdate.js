import React, { useState, useEffect } from 'react';
import './Forlanguageselect.css'; // Import your CSS file

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    if (newUser) {
      addSystemMessage(`${newUser} joined the game`);
    }
  }, [newUser]);

  const addSystemMessage = (text) => {
    setMessages((prevMessages) => [...prevMessages, { user: 'System', text }]);
  };

 

 
  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={message.user === 'System' ? 'system-message' : 'user-message'}>
            <strong>{message.user}: </strong>{message.text}
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default ChatBox;
