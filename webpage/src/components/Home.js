import React from 'react';
// import {Link} from 'react-router-dom'
import background from './../assets/images/background_photos/woods_background.png';
import styled from 'styled-components';
import theme from './../assets/styles/themes';


// components
import Projects from './Projects';
import Bio from './Bio';

const BannerImage = styled.div`
    width: 100%;
    height: 100vh;

    margin: 0;
    background-image: url(${background});
    background-size: cover;
   //  display: flex;
    align-self: center;
    justify-content: center;
`
function Home(props) {
   return (
      
         <BannerImage>
            <h1> Projects: </h1>
            <Projects sx={{ border: theme.palette.primary.borders }}/>
            <Bio />
            This is my homepage
         </BannerImage>
   )
}

export default Home
