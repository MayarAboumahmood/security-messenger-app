import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Login from './pages/login';
import Chats from './pages/Chats';
import Register from './pages/Register';

function MessengerApp() {
return( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Chats' element={<Chats />} />
        <Route path="/chat/:userID/:otherUserID/:userName" element={<Home />} />
        <Route path='*' element={<NoPage />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default MessengerApp;
