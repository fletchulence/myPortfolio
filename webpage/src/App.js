import React from 'react';
import { Routes, Route } from 'react-router-dom';

/**
 * MUI usage imports
 *  import {
 *    Container,
 *    Box,
 *    Typography,
 *    
 *  } from '@mui/material';
*/

// component imports
import Home from './components/Home';
import Login from './components/secretComponents/Login';
import Calendar from './components/Calendar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fish' element={<Calendar/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/comment' element={<CommentForm/>}/> */}
      </Routes>
    </>
  );
}

export default App;
