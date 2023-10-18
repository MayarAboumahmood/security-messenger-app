import axios from "axios";
import { useState } from "react";
const Login = () => {
    const [password, setPassword] = useState('');
    const [userName, setUsername] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const user = { userName, password };
        console.log('name: ',userName);   
        console.log('password: ',password);   
        
        try {
            // Send the username and password to the server
            const response = await axios.post(
                "http://blogservice.herokuapp.com/api/login",
                user
            );

            // Set the state of the user
            localStorage.setItem('user', JSON.stringify(response.data));
             <link rel="stylesheet" href="/Home" />
             console.log('response.status: ',response.status);   
            // Redirect to another page or update the UI to show the user is logged in
        } catch (error) {
            
            console.log('error: ',error);
            // Handle errors, e.g., show an error message
            setError("Invalid username or password");
        }
    };
    return (
        <div>
            <h2 className="header">Login</h2>
            <form className="loginInfo">
                <input
                    type="text"
                    value={userName}
                    placeholder="enter a username"
                    onChange={({ target }) => setUsername(target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="enter your password"
                    onChange={({ target }) => setPassword(target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>

        </div>
    );
}

export default Login;