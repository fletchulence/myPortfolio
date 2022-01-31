import React from 'react';
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import styled from '@mui/styled-engine';
import theme from '../assets/styles/themes';
//todo: look up how to change the themes on the buttons
//need to figure out how to style it proprtly



const Header = () => {
   return (
      <div sx={{ backgroundColor: theme.palette.primary.light }}>
         <Button  href='/' variant='contained'> home </Button>
         <Button href='#Projects' variant='contained'> expertise </Button>
      </div>
   )
}

export default Header
