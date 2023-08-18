import React from 'react'
import Login from './pages/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <div className=''>
        
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="*" element={<NoMatch />} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
