import React from 'react';
// import {Link} from 'react-router-dom'

import theme from './../assets/styles/themes';


// components
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import Typography from '@mui/material/Typography';
import Bio from './Bio';
import { Loading } from './secretComponents/Loading';
import { TreesBackground, StyledFooter, WoodBackground } from './../assets/styles/StyledComponents';

function Home(props) {
   if (props.isLoading === true){
      return <Loading/>
   } else return (
      <>
      <Header/>
      <section>
         <WoodBackground>
            <Typography variant='h3' sx={{ fontWeight:'9rem', textShadow: '1px 1px #0000004D' }}> Bio: </Typography> 
            <Bio/>
         </WoodBackground>
         <TreesBackground>
            <Typography variant='h3' sx={{ display: 'flex' }}> Projects: </Typography> 
            <Projects sx={{ border: theme.palette.primary.borders }}/>
         </TreesBackground>
      </section>
      <StyledFooter>
         <Footer/>
      </StyledFooter>
      </>
   )
}

export default Home
