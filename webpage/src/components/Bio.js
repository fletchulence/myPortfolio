import React from "react";

//MUI imports
import {
   Container,
   Box,
   Typography
} from '@mui/material';

export default function Bio() {
   return (
      <Container id='Bio' maxWidth='xl'>
         <Box sx={{
            boxShadow: '10',
            border:'1px solid white', 
            borderRadius:'1rem', 
            display: 'flex', 
            backgroundColor: "#0000004D", 
            padding:'2rem',
            }}>
            <Typography variant='h4' sx={{ opacity:'1.2', fontWeight:'medium', color: 'dark'}}>
               why i left sales
                  <Typography paragraph> Talk about sales </Typography>
               why i studied mechanical engineering
                  <Typography paragraph> Talk about sales </Typography>
               why I learned how to be a developer
                  <Typography paragraph> Talk about sales </Typography>
            </Typography>
         </Box>
      </Container>
   )
}
