import React from "react";
import Card from "react-bootstrap/Card";

function MessageCard({ from, text, time }) {
  return (
    <Card className="yes">
      <Card.Title>
        <strong>From: </strong>
        {from}
      </Card.Title>
      <Card.Text>
        <strong>Comment: </strong>
        {text}
      </Card.Text>
      <Card.Subtitle>
        <strong>Commented on: </strong> {time}
      </Card.Subtitle>
    </Card>
  );
}

export default MessageCard;
