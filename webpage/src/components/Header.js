import React from 'react';
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { StyledHeader } from '../assets/styles/StyledComponents';
import theme from '../assets/styles/themes';
//todo: look up how to change the themes on the buttons
//need to figure out how to style it proprtly

import {
   Container,
   Box,
} from '@mui/material';



const Header = () => {

   // var tableOffset = header.offset().top;
   // var header = ("#table-1 > thead").clone();
   // var fixedHeader = ("#header-fixed").append(header);

   // (window).bind("scroll", function () {
   //    var offset = this.scrollTop();

   //    if (offset >= tableOffset && fixedHeader.is(":hidden")) {
   //       fixedHeader.show();
   //    }
   //    else if (offset < tableOffset) {
   //       fixedHeader.hide();
   //    }
   // });

   return (
      // <header >
      <Box sx={{
         display: 'flex',
         // alignItems: 'center',
         border: `1px solid red`,
         top: `0`,
         height: `8vh`,
         width: `100%`,
         // zIndex: 1,
         // borderColor: theme.pallet.primary.borders, 
         backgroundColor: '#40afaf',
         // position: `fixed`,
      }}>
         <StyledHeader>
            <Button href='/' variant='contained'> home </Button>
            <Button href='/#Projects' variant='contained'> expertise </Button>
            <Button href='/#Bio' variant='contained'> BIO </Button>
            <Button href='/fish' variant='contained'> FishCal </Button>
         </StyledHeader>
      </Box>
   )
}

export default Header
