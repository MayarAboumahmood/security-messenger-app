import React from "react";
import UserCard from "./../combonent/userChatCard"; // Assuming you have a UserCard component

const users = [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
  ];


  const UserList = ({}) => {    
    return (
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  };
  
  export default UserList;
  