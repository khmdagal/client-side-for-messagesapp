import React from "react";
import { useState, useEffect } from "react";
import MessageCard from "./MessageCard";
let counter = 0;

function MessagesList() {
  const [messages, setMessages] = useState([""]);

  useEffect(() => {
    fetch(`https://khadar-dagal-chat-server.glitch.me/messages`)
      .then((res) => res.json())
      .then((data) => setMessages(data.reverse()));
  }, []);
  //setMessages(data)
  //setMessages(data.sort((a,b)=>b-a))
  return (
    <div>
      {messages.map((message) => (
        <MessageCard
          key={counter++}
          from={message.from}
          text={message.text}
          time={message.time}
        />
      ))}
    </div>
  );
}

export default MessagesList;
