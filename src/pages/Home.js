import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import MessageCard from './../component/messagecard';

const HomeChatx = () => {
    const { sendMessageURL, openChatURL } = require('./../const/const.js');
    const { userID, otherUserID, userName } = useParams();
    const [localMessage, setLocalMessage] = useState('');
    const [chatID, setChatID] = useState('');
    let [i, setI] = useState(false);
    let allMessagesObject = {
        message: '',
        messageID: '',
    }
    const [allMessages, setAllMessages] = useState([allMessagesObject]);
    if (!i) {
        openChat(openChatURL, userID, otherUserID);
        setI(true);
    }

    function getRealtimeData(data) {
        console.log('the data in the sse: ', data);
        let updatedValue = { 'message': data.messages, 'messageID': data.users };
        setAllMessages((prevMessages) => [
            ...prevMessages,
            updatedValue
        ]);
    }


    //.....................................
    useEffect(() => {
        const sse = new EventSource(`http://127.168.0.1:3000/showNewMessage/:${chatID}`);
        sse.onmessage = (event) => {
            if (event.data === 'init') {
                console.log('event.data in the onmessage: ', event.data);
            } else {
                console.log('we are in the else');
                getRealtimeData(JSON.parse(event.data));
            }
        }
        sse.onerror = (e) => {
            console.log(e);
            sse.close();
        }
        return () => {
            console.log('the sse is cloesd for now!');
            sse.close();
        }
    }, [chatID]);//I should find something that is change to put it here to make the useeffect work!
    //.....................................


    async function openChat(url, userID, otherUserID) {
        try {
            const response = await axios.post(url, {
                "userID1": userID,
                "userID2": otherUserID,
            });
            if (response.status === 200) {
                setChatID(response.data.data._id);
                if (response.data.data.messages.length === 0) {
                    console.log('there is no messages yet!');
                } else {
                    for (let i = 0; i < response.data.data.messages.length; i++) {
                        setAllMessages((prevMessages) => [
                            ...prevMessages,
                            { 'message': response.data.data.messages[i].data, 'messageID': response.data.data.messages[i].userID }
                        ]);
                    }
                }
                await timeout(10);
                scrollToBottom();
            }
        } catch (error) {
            console.log('error: ', error);
        }
    }

    const handleMessageChange = (e) => {
        setLocalMessage(e.target.value);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const sendMessage = { "message": localMessage, "userID": userID, "chatID": chatID };
        try {
            const response = await axios.post(sendMessageURL, sendMessage);
            if (response.status === 200) {
                let updatedValue = { 'message': localMessage, 'messageID': response.data.data.users };
                setAllMessages((prevMessages) => [
                    ...prevMessages,
                    updatedValue
                ]);
                setLocalMessage('');
                await timeout(10)
                scrollToBottom();

            }
        } catch (error) {
            console.log('error: ', error);
        }

    };

    //to make a small delay...
    function timeout(delay) {
        return new Promise(res => setTimeout(res, delay));
    }


    const messagesEndRef = useRef(null);
    // Function to scroll to the bottom of the chat container
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    };

    return (
        <div>
            <h1>let's chat with {userName}</h1>
            <div className="theScreen" ref={messagesEndRef}>
                {(allMessages.length > 1) ? (
                    allMessages.map((message, index) => (
                        <MessageCard
                            key={index}
                            messageText={message.message}
                            isYourMessage={message.messageID !== otherUserID}
                        />
                    ))
                ) : (
                    <p>No messages yet</p>
                )}
            </div>
            <div id="textField1">
                <input
                    name='myInput'
                    type="text"
                    placeholder="Type your message..."
                    value={localMessage}
                    onChange={handleMessageChange}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default HomeChatx;