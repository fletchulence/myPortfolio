// import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
// import GlobalStyle from './assets/styles/GlobalStyle';

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
    <Container maxWidth='xl' sx={{ height: '100%'}} >
      <Box sx={{ 
        display:'flex', 
        alignItems:'center', 
        border:'1px solid black', 
        // backgroundColor: "tertiary.main" 
      }}>
          < Header sx={{ display: 'flex', justifyContent: 'right' }} />
          <h2> Welcome to my Website! </h2>
      </Box>
    </Container>   

    <Container maxWidth='sm'>
      <h1> Bio / About me : </h1>
      <Box sx={{ display: 'flex'}}>
          <ul>
            <li> worked on a farm </li>
            <li> degree in MechE </li>
            <li> looking to be a fullStack Dev for the REST OF TIME</li>
          </ul>
      </Box>
    </Container>

      <Card id='Projects'>
        {/* <h1> Projects: </h1> */}
        <CardContent>
          <Typography variant="body2" color="pallet.primary.main">here are some of my projects that i've worked on in the past:</Typography>
          <Projects sx={{ border: '4px solid black'}}/>
        </CardContent>
      </Card>

      <div>
        <h1> Hobbies: </h1>
        <StyledImage src={NYCIMG} alt="NYC skyline"/>
      </div>

      {/* 
      //! what are the ROUTES that i'll need in general?
      //!    -- do i need routes anyway?
           */}
      <Routes>
        <Route path='/' element={ <Home /> }/>
        {/* <Route path='#Projects' element={ < Projects /> }/> */}
      </Routes>
  
    </React.Fragment>
);
}

export default App;
