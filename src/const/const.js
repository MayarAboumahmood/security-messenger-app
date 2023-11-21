const registerURL='http://127.168.0.1:3000/users/register';
const loginURL='http://127.168.0.1:3000/users/login';
const getUsersURL='http://127.168.0.1:3000/users/get-users';
const openChatURL='http://127.168.0.1:3000/chats/open-chat';
const sendMessageURL='http://127.168.0.1:3000/chats/send-message';
const receiveMessageURL='http://127.168.0.1:3000/showNewMessage/:chatID';

module.exports = {
    registerURL,
    loginURL,
    getUsersURL,
    openChatURL,
    sendMessageURL,
    receiveMessageURL,
  };