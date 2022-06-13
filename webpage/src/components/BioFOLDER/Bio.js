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
                  I learned a lot about the importance of knowing your customers
                  as well as your support staff.`
   },
   {
      item: `why I learned how to be a developer...`, 
      contents:`I want to help people put their ideas to life. I understand now 
                  many more things that i didnt before and i am constantly learning more
                  
                  `
                  // perhaps add link to what else you learned somewhere

   },
];

export default function Bio() {


   return (
      <Container id='Bio'>
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
