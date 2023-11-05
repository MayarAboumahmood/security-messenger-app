import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user,userID }) => {
  return (
    <Link to={`/chat/${userID}/${user._id}`}>
      <div>
        <h3>{user.user_name}</h3>
      </div>
    </Link>
  );
};

export default UserCard;
