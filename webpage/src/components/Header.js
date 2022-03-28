import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import PhishingIcon from '@mui/icons-material/Phishing';

const Header = () => {
   let navigate = useNavigate();
   /* async */ function handleClick(e) {
      // e.preventDefault()
      /* await LoginForm(e.target)*/
      navigate('/login')
   }

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
         </StyledHeader>
            <PhishingIcon onClick={()=> handleClick()}> </PhishingIcon>
      </Box>
   )
}

export default Header
