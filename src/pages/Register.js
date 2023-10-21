import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../style/loginStyle.css";
import url from "./../const/const.js";

const Register = () => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const { registerURL } = require('./../const/const.js');
    
    const user = { "user_name":userName,"password": password };
    console.log('password: ', password);
    console.log('name: ', userName);
    try {
console.log('what ');
      const response = await axios.post(
        registerURL
        ,
        user
      );
      console.log('response.status: ',response.status); 
      if (response.status === 200) {
        navigate('/Chats', { replace: true });
      }
    } catch (error) {
      // navigate('/Chats',{replace:true});   //to delete after connect with the backend... 
      console.log('error: ', error);
      setError("Invalid username or password");
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