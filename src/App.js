import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './shared/pages/Login';
import Home from './shared/pages/Home';
import Calendar from './shared/pages/Calendar';

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
