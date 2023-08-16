import React from 'react'
import Login from './pages/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';

const App = () => {
  return (
    <Router>
      <div className='min-w-[350px]'>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        
      </div>
    </Router>
  )
}

export default App
