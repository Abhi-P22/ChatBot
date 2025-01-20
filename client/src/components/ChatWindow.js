import React, { useState } from "react";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";
import { sendMessage } from "../services/api";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    const userMessage = { text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    const response = await sendMessage(text);
    const botMessage = { text: response.data.response, isUser: false };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="chat-window">
      <div className="chat-history">
        {messages.map((msg, index) => (
          <ChatBubble key={index} {...msg} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
