import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import MessageCard from './../combonent/messagecard';

const HomeChatx = () => {
    const { sendMessageURL, openChatURL } = require('./../const/const.js');
    const { userID, otherUserID } = useParams();
    const [localMessage, setLocalMessage] = useState('');
    const [chatID, setChatID] = useState('');
    let allMessagesObject = {
        message: '',
        messageID: [],
    }
    const [allMessages, setAllMessages] = useState([allMessagesObject]);

    useEffect(() => {
        if (chatID === '') {
            openChat(openChatURL, userID, otherUserID);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatID, openChatURL, userID, otherUserID]);

    async function openChat(url, userID, otherUserID) {
        try {
            const response = await axios.post(url, {
                "userID1": userID,
                "userID2": otherUserID,
            });
            if (response && response.status === 200) {
                console.log("Request was successful:", response);
                setChatID(response.data.data._id);
                if(response.data.data.messages.length>0){
                    console.log('it is empty');
                }else{
                    for (let i = 0; i < response.data.data.messages.length; i++) {
                        console.log('eeeeeeeeeeeeeeeee: ', response.data.data.message[i]);
                        setAllMessages((prevMessages) => [
                            ...prevMessages,
                            { 'message': response.data.data.message[i], 'messageID': response.data.data.users }
                        ]);console.log('all messages: ', allMessages.message);
                    }
    
                }
                
                console.log("allMessages: ", allMessages);
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
                console.log(200);
                let updatedValue = { 'message': localMessage, 'messageID': response.data.data.users };
                setAllMessages((prevMessages) => [
                    ...prevMessages,
                    updatedValue
                ]);                
                console.log('localMessage: ', localMessage);
                setLocalMessage('');
                console.log('allMessages: ', allMessages);
            }
        } catch (error) {
            console.log('error: ', error);
        }
    };

    return (
        <div>
            <h1>Let's chat!</h1>
            <div className="theScreen">
                {allMessages.length > 0 ? (
                    allMessages.map((message, index) => (
                        <MessageCard
                            key={index}
                            messageText={message.message}
                            isYourMessage={message.messageID[0] === userID}
                        />
                    ))
                ) : (
                    <p>No messages yet</p>
                )}
            </div>
            <div id="textField1">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={localMessage}
                    onChange={handleMessageChange}
                />
                <button className="sendButton" onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default HomeChatx;
