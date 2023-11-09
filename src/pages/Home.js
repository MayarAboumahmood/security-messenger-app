import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import MessageCard from './../combonent/messagecard';

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

    async function openChat(url, userID, otherUserID) {
        try {
            const response = await axios.post(url, {
                "userID1": userID,
                "userID2": otherUserID,
            });
            if (response.status === 200) {
                console.log("open chat Request was successful:", response);
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
                console.log('the message had been sent!');

                let updatedValue = { 'message': localMessage, 'messageID': response.data.data.users };
                setAllMessages((prevMessages) => [
                    ...prevMessages,
                    updatedValue
                ]);
                setLocalMessage('');
                // scrollToBottom();

            }
        } catch (error) {
            console.log('error: ', error);
        }

    };
    // const chatContainerRef = useRef(null);

    // Function to scroll to the bottom of the chat container
    // const scrollToBottom = () => {
        // chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    // };

    // useEffect(() => {
        // Scroll to the bottom when the component initially mounts
        // scrollToBottom();
    // }, []);

    return (
        <div>
            <h1>let's chat with {userName}</h1>
            <div className="theScreen" /*ref={chatContainerRef}*/>
                {(allMessages.length > 1) ? (
                    allMessages.map((message, index) => (
                        <MessageCard
                            key={index}
                            messageText={message.message}
                            isYourMessage={message.messageID!==otherUserID}
                        />
                    ))
                ) : (
                    <p>No messages yet</p>
                )}
            </div>
            <div id="textFeild1">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={localMessage}
                    onChange={handleMessageChange}
                />
                <button  onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default HomeChatx;
