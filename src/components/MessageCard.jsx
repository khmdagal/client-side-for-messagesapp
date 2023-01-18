import React from "react";
import Card from "react-bootstrap/Card";

function MessageCard({ from, text, time }) {
  return (
    <Card className="yes">
      <Card.Title>{from}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Card.Subtitle>commented on: {time}</Card.Subtitle>
    </Card>
  );
}

export default MessageCard;
