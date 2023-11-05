import React from 'react';
import "./../style/homeStyle.css";

const MessageCard = ({ messageText, isYourMessage }) => {
  console.log('is it your messages: ',isYourMessage);
  return (
    <div className={`${isYourMessage ? 'yourMessage' : 'otherMessage'}`}>
      <p>{messageText}</p>
    </div>
  );
};

export default MessageCard;


