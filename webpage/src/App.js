// import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
// import GlobalStyle from './assets/styles/GlobalStyle';
import theme from './assets/styles/themes';

//MUI imports
import {
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
} from '@mui/material';

//component imports
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
// import Foreign from './components/Foreign';

//img imports
import NYCIMG from './assets/images/IMG_0480.jpg'

const StyledImage = styled.img`
  height: 800px;
  margin: 15px;
`

function App() {
  return (
    <React.Fragment>
      <Container maxWidth='xl' sx={{ height: '100%' }} >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          border: `1px solid ${theme.palette.primary.light}`,
          // borderColor: theme.pallet.primary.borders, 
          backgroundColor: theme.palette.primary.light,
        }}>
        < Header sx={{ display: 'flex', justifyContent: 'right' }} />
          <h2> Welcome to my Website! </h2>
        </Box>
      </Container>

      <Container maxWidth='lg'>
        <h1> Bio / About me : </h1>
        <Box sx={{ display: 'flex' }}>
          <ul>
            <li> worked on a farm </li>
            <li> degree in MechE </li>
            <li> looking to be a fullStack Dev for the REST OF TIME</li>
          </ul>
        </Box>
      </Container>

      <Container id='Projects' maxWidth='lg'>
        <h1> Projects: </h1>
        <Projects sx={{ border: theme.palette.primary.borders }} />
      </Container>

      <Container>
        <h1> Hobbies: </h1>
        <StyledImage src={NYCIMG} alt="NYC skyline" />
      </Container>

      {/* 
      //! what are the ROUTES that i'll need in general?
      //!    -- do i need routes anyway?
           */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='#Projects' element={ < Projects /> }/> */}
      </Routes>

    </React.Fragment>
  );
}

export default App;
