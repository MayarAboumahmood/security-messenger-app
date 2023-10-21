import './../style/homeStyle.css';
import fethcOpenChate from "../service/useFetch";
import messageCard from "./../combonent/messagecard";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const { openChatURL } = require('./../const/const.js');
    const { sendMessageURL } = require('./../const/const.js');
    const location = useLocation();
    const userID = new URLSearchParams(location.search).get('userID');
    const otherUserID = new URLSearchParams(location.search).get("otherUserID");
    const chatID = new URLSearchParams(location.search).get("chatID");
    const [messagesVar, setMessagesVar] = useState([]);
    const [newMessage, setNewMessage] = useState('');


    const postMessages = async e => {
        e.preventDefault();
        const openChat = { "userID1": userID, "userID2": 1 };
        try {
            const response = await axios.post(
                openChatURL
                , openChat
            );
            if (response.status === 200) {
                setMessagesVar(response['data'].messages);
            }
        } catch (error) {
            console.log('error: ', error);
        }
    };
    postMessages();
    const handleMessageChange = (e) => {
        setNewMessage(e.target.value);
    };
    const handleSendMessage = async e => {
        e.preventDefault();
        const sendMessage = { "message": messagesVar, "userID": userID, "chatID": chatID };
        try {
            const response = await axios.post(
                sendMessageURL
                , sendMessage
            );
            if (response.status === 200) {
                console.log(200);
            }
        } catch (error) {
            console.log('error: ', error);
            console.log("Invalid username or password");
        }
    };
    return (
        <div>
            <h1>let's chat!</h1>
            <div className="theScreen">
                {messagesVar && messagesVar.map(message => (
                    <div >
                        {message.userID === userID && <messageCard key={0} text={message.data} id='my_messages' />}
                        {message.userID !== userID && <messageCard key={0} text={message.data} id='other_messages' />}

                    </div>
                )
                )
                }
            </div>
            <div id="textFeild1">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={messagesVar}
                    onChange={handleMessageChange}
                />
                <button className="sendButton" onClick={handleSendMessage}>Send</button>
                <button className="sendButton" onClick={() => console.log('userID: ', { userID }, 'chatID: ', { chatID }, 'otherUserID: ', { otherUserID })}>click me</button>
            </div>

        </div>
    );
}

export default Home; 
