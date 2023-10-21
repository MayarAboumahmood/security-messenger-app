import './../style/homeStyle.css';
import fethcOpenChate from "../service/useFetch";
import messageCard from "./../combonent/messagecard";
import { useLocation } from 'react-router-dom';

const Home = () => {
    const { openChatURL } = require('./../const/const.js');
    const location = useLocation();
    const userId = new URLSearchParams(location.search).get("userId");
      
  const { data: messages, isPending, error } = fethcOpenChate(openChatURL);
    
    return (
        <div>
            <h1>let's chat!</h1>
            
            <div className="chating">
            {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {messages['data'] && messages['data'].map(message => (
          message.userID===userId && <messageCard text={message.data} />
        ))
      }
            </div>

        </div>
    );
}

export default Home; 



// const [messages1, setMessages1] = useState([]);
// const [newMessage1, setNewMessage1] = useState('');

//             {messages1.map((message, index) => (
//     <div>
//         <h1 id="headerOne">Messenger App</h1>
//         <div className="theScreen">
//                 <div id='message1OneTheScreen' key={index}>{message.text}</div>
//             ))} 
//             {/* {messages2.map((message2, index) => (
//                 <div id='message2OneTheScreen' key={index}>{message2.text}</div>
//             ))} */}
//         </div>
//         <div id="textFeild1">
//             <input
//                 type="text"
//                 placeholder="Type your message..."
//                 value={newMessage1}
//                 onChange={handleMessage1Change}
//             />
//             <button className="sendButton" onClick={handleSendMessage1}>Send</button>
//         </div>
//             {/* <div id="textFeild2">
//                     <input
//                         type="text"
//                         placeholder="Type your message..."
//                         value={newMessage2}
//                         onChange={handleMessage2Change}
//                     />
//                     <button className="sendButton" onClick={handleSendMessage2}>Send</button>
//                 </div> */}
            
//     </div>
        
    
       // const handleMessage1Change = (e) => {
    //     setNewMessage1(e.target.value);
    // };
    // const handleSendMessage1 = () => {
    //   if (newMessage1.trim() !== '') {
    //     setMessages1([
    //       ...messages1,
    //       {
    //         text: newMessage1,
    //         user: 1,
    //         timestamp: new Date().getTime(),
    //       },
    //     ]);
    //     setNewMessage1('');
    //   }
    // };
