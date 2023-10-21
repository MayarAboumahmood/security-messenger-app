import UserCard from "./../combonent/userChatCard";
import useFetch from "../service/useFetch";
import { useLocation } from "react-router-dom";

const UserList = () => {
  const { getUsersURL } = require('./../const/const.js');
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get("userId");
  const { data: users, isPending, error } = useFetch(getUsersURL);
  const filteredUsers = users.filter(user => user._id !== userId);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {filteredUsers && filteredUsers.map(user => (
          <UserCard key={user._id} user={user} />
        ))
      }
    </div>
  );
};

export default UserList;
