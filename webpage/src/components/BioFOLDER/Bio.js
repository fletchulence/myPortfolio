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
      item: ` why I studied mechanical engineering...`, 
      contents:`I love figuring out how things work. I (along with many engineers I know)
                  have a full drawer of broken things`
   },
   {
      item: `why sales wasnt for me...`, 
      contents:`I really enjoy working with people. I appreciated the 
                  exposure that I had to the nuances of shipping and handling.
                  I learned a lot about the`
   },
   {
      item: `why I learned how to be a developer...`, 
      contents:`more information here`
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
