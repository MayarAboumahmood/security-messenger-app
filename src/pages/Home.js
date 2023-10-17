import { useState } from "react";

const Home = () => {
    const [messages1, setMessages1] = useState([]);
    const [newMessage1, setNewMessage1] = useState('');
    const [messages2, setMessages2] = useState([]);
    const [newMessage2, setNewMessage2] = useState('');
  
    const handleMessage1Change = (e) => {
        setNewMessage1(e.target.value);
    };
    const handleMessage2Change = (e) => {
        setNewMessage2(e.target.value);
    };
  
    const handleSendMessage1 = () => {
      if (newMessage1.trim() !== '') {
        setMessages1([
          ...messages1,
          {
            text: newMessage1,
            user: 1,
            timestamp: new Date().getTime(),
          },
        ]);
        setNewMessage1('');
      }
    };
    
    const handleSendMessage2 = () => {
      if (newMessage2.trim() !== '') {
        setMessages2([
          ...messages2,
          {
            text: newMessage2,
            user: 2,
            timestamp: new Date().getTime(),
          },
        ]);
        setNewMessage2('');
      }
    };
    
  
    return (
        <div>
        <h1 id="headerOne">Messenger App</h1>
        <div className="theScreen">
            {messages1.map((message, index) => (
                <div id='message1OneTheScreen' key={index}>{message.text}</div>
            ))} 
            {messages2.map((message2, index) => (
                <div id='message2OneTheScreen' key={index}>{message2.text}</div>
            ))}
        </div>
        <div id="textFeild1">
            <input
                type="text"
                placeholder="Type your message..."
                value={newMessage1}
                onChange={handleMessage1Change}
            />
            <button className="sendButton" onClick={handleSendMessage1}>Send</button>
        </div>
            <div id="textFeild2">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={newMessage2}
                        onChange={handleMessage2Change}
                    />
                    <button className="sendButton" onClick={handleSendMessage2}>Send</button>
                </div>
            
    </div>
        
    
    );
}

export default Home;