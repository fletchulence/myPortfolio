import React from 'react';
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
//todo: look up how to change the themes on the buttons
//need to figure out how to style it proprtly

const Header = () => {
   return (
      <div>
         <Button href='/' variant='contained'> home </Button>
         <Button href='#Projects' variant='contained'> expertise </Button>
      </div>
   )
}

export default Header
