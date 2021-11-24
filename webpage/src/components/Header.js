import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div>
         <Link to='/'>Home</Link>
         <Link to='expertise'>Experience</Link>
      </div>
   )
}

export default Header
