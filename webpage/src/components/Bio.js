import React from "react";

//MUI imports
import {
   Container,
   Box,
   Typography,
} from '@mui/material';

import BioItems from './BioFOLDER/BioItems';

const BioInfo = [
   {
      item: ' why i studied mechanical engineering...', 
      contents:'I liked to build things'
   },
   {
      item: 'why sales wasnt for me...', 
      contents:'More information here'
   },
   {
      item: ' why I learned how to be a developer...', 
      contents:'More information here'
   },
];

export default function Bio() {


   return (
      <Container id='Bio' maxWidth='xl'>
         <Box>
               {
                  BioInfo.map((el, idx) =>
                     <BioItems 
                        key={idx}
                        item={el.item}
                        contents={el.contents}
                     >{el}</BioItems>         
                  )
               }
         </Box>
      </Container>
   )
}
