import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState("");

  const handleUserMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      handleBotResponse(input);
      setInput("");
    }
  };

  const handleBotResponse = (userInput: string) => {
    let response = "";

    // Basic keyword matching for demonstration
    if (userInput.toLowerCase().includes("occasion")) {
      response = "What occasion are you dressing up for?";
    } else if (userInput.toLowerCase().includes("casual")) {
      response = "How about a comfortable t-shirt and jeans?";
    } else if (userInput.toLowerCase().includes("formal")) {
      response = "A blazer and formal trousers would be a good choice.";
    } else {
      response = "I'm here to help you choose an outfit! Tell me more about your preferences.";
    }

    setMessages((prevMessages) => [...prevMessages, { text: response, isUser: false }]);
  };

  return (
    <div style={{ width: "300px", height: "400px", border: "1px solid #ccc", padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ overflowY: "scroll", flex: 1 }}>
        {messages.map((msg, index) => (
          <p key={index} style={{ textAlign: msg.isUser ? "right" : "left" }}>
            <strong>{msg.isUser ? "You: " : "Bot: "}</strong>{msg.text}
          </p>
        ))}
      </div>
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: "0.5rem" }}
          placeholder="Type your message..."
        />
        <button onClick={handleUserMessage} style={{ padding: "0.5rem 1rem" }}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
