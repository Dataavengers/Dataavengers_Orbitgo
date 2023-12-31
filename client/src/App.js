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
import Activity from './pages/Activity';
import Booking from './pages/Booking';
import StartBooking from './pages/StartBooking'
import Info from './pages/Info';
import BoardingPass from './pages/BoardingPass';

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
          <Route path="/activity" element={<Activity />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/startbooking" element={<StartBooking />} />
          <Route path="/info" element={<Info />} />
          <Route path="/boardingpass" element={<BoardingPass />} />
          
          <Route path="*" element={<NoMatch />} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
