import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user ,chatID,userID}) => {
  return (
    <Link to={`/chat/${userID}?chatID=${chatID}&&otherUserID=${user._id}&&userID=${userID}`} className="user-card" >
      <div>
        <h3>{user.user_name}</h3>
      </div>
    </Link>
  );
};
  
export default UserCard;
