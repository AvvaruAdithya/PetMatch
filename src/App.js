import React from 'react';
import Registration from './Components/LoginSignup/Registration';
import Login from './Components/LoginSignup/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './Components/LoginSignup/ProfilePage';
// import ProfilePage from './Components/LoginSignup/ProfilePage';
// import Header from './Components/LoginSignup/Website/Header';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </Router>
  );
}

export default App;











