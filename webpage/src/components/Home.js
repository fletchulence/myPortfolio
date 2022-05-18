import React from 'react';
// import {Link} from 'react-router-dom'

import theme from './../assets/styles/themes';


// components
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import Bio from './Bio';
import { Loading } from './secretComponents/Loading';
import { BannerImage, StyledFooter } from './../assets/styles/StyledComponents';

function Home(props) {
   if (props.isLoading === true){
      return <Loading/>
   } else return (
      <>
      <header>
         <Header/>
      </header>
      <main>
         <BannerImage>
            {/* <div> */}
            <h1> Projects: </h1>
            <Projects sx={{ border: theme.palette.primary.borders }}/>
            <Bio />
            This is my homepage
            {/* </div> */}
         </BannerImage>
      </main>
      <StyledFooter>
         <Footer/>
      </StyledFooter>
      </>
   )
}

export default Home
