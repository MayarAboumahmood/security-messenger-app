import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Login from './pages/login';

function MessengerApp() {
return( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='*' element={<NoPage />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default MessengerApp;
