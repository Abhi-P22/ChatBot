import React from "react";

const ChatBubble = ({ text, isUser }) => (
  <div className={`chat-bubble ${isUser ? "user" : "bot"}`}>{text}</div>
);

export default ChatBubble;
