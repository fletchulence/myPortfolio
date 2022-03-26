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
import Header from './components/Header';
import FishCal from './components/FishCal';

function App() {
  return (
    <>
      < Header />
      {/* 
      //! what are the ROUTES that i'll need in general?
      //!    -- do i need routes anyway?
           */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fish' element={<FishCal/>}/>
        {/* <Route path='/login' element={<Login/>}/> */}
        {/* <Route path='#Projects' element={ < Projects /> }/> */}
      </Routes>

    </>
  );
}

export default App;
