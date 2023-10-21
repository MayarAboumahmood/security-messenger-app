import UserCard from "./../combonent/userChatCard";
import useFetch from "../service/useFetch";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const { getUsersURL } = require('./../const/const.js');
  const location = useLocation();
  const userID = new URLSearchParams(location.search).get("userId");
  const { data: users, isPending, error } = useFetch(getUsersURL);
  const filteredUsers = users.filter(user => user._id !== userID);


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {filteredUsers && filteredUsers.map(user => (
          <UserCard key={user._id} user={user} userID= {userID}/>
        ))
      }
    </div>
  );
};

export default UserList;
