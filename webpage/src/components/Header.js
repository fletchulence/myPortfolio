import React from 'react';
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => {
   return (
      <div>
         <Button href='/' variant='contained'> home </Button>
         <Button href='/expertise' variant='contained'> expertise </Button>
      </div>
   )
}

export default Header
