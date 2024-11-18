import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
   

    return (
        <iframe
        src="Flask\templates\chatbot.html" // Path to your HTML file
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="External HTML"
      ></iframe>
    );
};

export default ChatBot;
