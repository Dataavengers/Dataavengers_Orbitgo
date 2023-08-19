import React from 'react'
import Login from './pages/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import UpdateUsername from './pages/UpdateUsername';
import UpdateName from './pages/UpdateName';
import UpdatePassword from './pages/UpdatePassword';
import Discover from './pages/Discover';
import Booking from './pages/Booking';

const App = () => {
  return (
    <Router>
      <div className=''>
        
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateuser" element={<UpdateUsername />} />
          <Route path="/updatename" element={<UpdateName />} />
          <Route path="/updatepass" element={<UpdatePassword />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/booking" element={<Booking />} />
          
          <Route path="*" element={<NoMatch />} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
