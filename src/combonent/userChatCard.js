import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Link to={`/chat/${user.id}`} className="user-card">
      <div>
        <h3>{user.user_name}</h3>
      </div>
    </Link>
  );
};
  
export default UserCard;
