import React from "react";

//MUI imports
import {
   Container,
   Box,
   Typography,
} from '@mui/material';

import BioItems from './BioItems';

const BioInfo = [
   {
      item: ' why I studied mechanical engineering...', 
      contents:'more information here'
   },
   {
      item: 'why sales wasnt for me...', 
      contents:'more information here Lorem ipsum l;kajsdf;klj;alksjdfl;kj ;lkajsdff as;lkdjf ;akljs dfkla '
   },
   {
      item: ' why I learned how to be a developer...', 
      contents:'more information here'
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
