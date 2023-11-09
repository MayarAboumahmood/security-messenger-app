import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../style/loginStyle.css";

const Register = () => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let userId

  const handleSubmit = async e => {
    e.preventDefault();
    const { registerURL } = require('./../const/const.js');
    
    const user = { "user_name":userName,"password": password };
    try {
      const response = await axios.post(
        registerURL
        ,
        user
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
      <h2 className="header">Register</h2>
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
          Register
        </button>
        <a href="/">already have an account?</a>
      </form>
    </div>
  );
};

export default Register;