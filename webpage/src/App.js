import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//MUI imports
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

//component imports
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Foreign from './components/Foreign';

//img imports
import NYCIMG from './images/IMG_0480.jpg'

const StyledImage = styled.img`
  height: 800px;
  margin: 15px;
`

function App() {
  return (
    <div className='App'>
    <Container maxWidth='md'>
      <h1> Welcome to my Website! </h1>
      <Box sx={{ display:'flex', alignItems:'center', border:'1px solid black' }} color='text.primary'>
            < Header />
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

      <Card className='Projects'>
        <h1> Projects: </h1>
        <p>here are some of my projects that i've worked on in the past:</p>
      </Card>

      <div>
        <h1> Hobbies: </h1>
        <StyledImage src={NYCIMG} alt="NYC skyline"/>
      </div>

      <Foreign/>

      {/* 
      //! what are the ROUTES that i'll need in general?
      //!    -- do i need routes anyway?
           */}
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/expertise' element={ < Projects /> }/>
      </Routes>

       
      <div>
        this should produce an error 
      </div>
  
    </div>
);
}

export default App;
