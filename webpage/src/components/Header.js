import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { StyledHeader } from '../assets/styles/StyledComponents';
import theme from '../assets/styles/themes';
//todo: look up how to change the themes on the buttons
//need to figure out how to style it proprtly

import {
   Container,
   Typography,
   Box,
} from '@mui/material';
import PhishingIcon from '@mui/icons-material/Phishing';

const Header = (props) => {
   let navigate = useNavigate();
   /* async */ function handleFish(e) {
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
      <Box sx={{
         display: 'flex',
         top: `0`,
         height: `auto`,
         width: `100%`,
         backgroundImage: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
       }}>
        <StyledHeader>
           <Typography variant='h1' display={'flex'} sx={{ padding:'2%', textShadow: '2px 2px #00000033' }}>
             David A. Fletcher
           </Typography>
        </StyledHeader>
        <PhishingIcon onClick={()=> handleFish()}> </PhishingIcon>
      </Box>
   )
}

export default Header
