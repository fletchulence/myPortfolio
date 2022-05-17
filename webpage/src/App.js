// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import theme from './assets/styles/themes';

//MUI imports
import {
  Container,
  Box,
} from '@mui/material';

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
      </Routes>
    </>
  );
}

export default App;
