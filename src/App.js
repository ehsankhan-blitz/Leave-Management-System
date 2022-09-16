import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Calendar from './pages/Calendar';

function App() {
  return (
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/calendar' element={<Calendar/>} />
      </Routes>
   
  );
}

export default App;
