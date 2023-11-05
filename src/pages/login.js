import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../style/loginStyle.css"; 
let userId
const Login = () => {
    const { loginURL } = require('./../const/const.js');
    const navigate=useNavigate();
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async e => {
            e.preventDefault();
            const user = { "user_name":userName,"password": password };

        try {
            const response = await axios.post(
              loginURL 
              ,user
            );
            if (response.status === 200) {
              userId=response.data['data']._id;
              navigate(`/Chats?userId=${userId}`,{replace:true});    
            }
        } catch (error) {
            console.log('error: ', error);
        }
    };
    return (
        <div className="container">
      <h2 className="header">Login</h2>
      <form className="loginInfo">
        <p>name</p>
        <input
          className="loginInput"
          type="text"
          value={userName}
          placeholder="enter a username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <p>password</p>
        <input
          className="loginInput"
          type="password"
          value={password}
          placeholder="enter your password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <a href="/Register">don't have an account yet?</a>
      </form>
    </div>
  );
};

export default Login;