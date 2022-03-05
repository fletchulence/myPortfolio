import React from "react";

//MUI imports
import {
   Container,
   Box,
} from '@mui/material';

export default function Bio() {
   return (
      <>
         <h1> Bio / About me : </h1>
         <Container id='Bio' maxWidth='xl'>
            <Box sx={{ display: 'flex' }}>
               <ul>
                  <li> worked on a farm </li>
                  <li> degree in MechE </li>
                  <li> looking to be a fullStack Dev for the REST OF TIME</li>
               </ul>
            </Box>
         </Container>
      </>
   )
}
