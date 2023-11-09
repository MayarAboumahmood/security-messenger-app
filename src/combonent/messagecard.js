import React from 'react';
import "./../style/homeStyle.css";

const MessageCard = ({ messageText, isYourMessage }) => {
  console.log('isYourMessage: ',isYourMessage)
  if(messageText===''){
    return(
      <p/>
    );
  }else{
  return (
    <div className={`${isYourMessage ? 'yourMessage' : 'otherMessage'}`}>
      <p>{messageText}</p>
    </div>
  );
};}

export default MessageCard;


