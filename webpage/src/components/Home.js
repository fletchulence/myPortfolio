import React from 'react';
// import {Link} from 'react-router-dom'

import theme from './../assets/styles/themes';

// components
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import { Typography } from '@mui/material';
import Bio from './BioFOLDER/Bio';
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
            <Typography variant='h3' sx={{ fontWeight:'regular', textShadow: '2px 2px #0000004d /* #2e170a4D */' }}> Bio: </Typography> 
            <Bio/>
         </WoodBackground>
         <TreesBackground>
            <Typography variant='h3' sx={{ textShadow: '2px 2px #00000080' }}> Projects: </Typography> 
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
