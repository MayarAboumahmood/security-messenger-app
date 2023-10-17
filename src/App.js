import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

function MessengerApp() {
return( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoPage />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default MessengerApp;
