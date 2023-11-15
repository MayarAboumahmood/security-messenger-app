import React from 'react';
import "./../style/homeStyle.css";

const MessageCard = ({ messageText, isYourMessage }) => {
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


