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
   {
      item: `what I've learned`, 
      contents: [
         // <!-- arduino -->
         <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="80" height="80"/> </a> ,
         //  <!-- bootstrap -->
         <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="80" height="80"/> </a>,
         //  <!-- css3 -->
         <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="80" height="80"/> </a> ,
         //  <!-- cypress -->
         <a href="https://www.cypress.io" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" alt="cypress" width="80" height="80"/> </a> ,
         //todo  <!-- express -- TODO: change this so we can see -->
         <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="80" height="80"/> </a> ,
         //  <!-- git -->
         <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="80" height="80"/> </a> ,
         //  <!-- heroku -->
         <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="80" height="80"/> </a> ,
         //  <!-- html5 -->
         <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="80" height="80"/> </a> ,
         //  <!-- ADOBE illustrator -->
         <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="80" height="80"/> </a> ,
         //  <!-- js -->
         <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80"/> </a> ,
         //  <!-- jest -->
         <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="80" height="80"/> </a> ,
         //  <!-- matlab -->
         <a href="https://www.mathworks.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="matlab" width="80" height="80"/> </a> ,
         //  <!-- nextjs -->
         <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" alt="nextjs" width="80" height="80"/> </a> ,
         //  <!-- nodejs -->
         <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80"/> </a> ,
         //  <!-- photoshop -->
         <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="80" height="80"/> </a> ,
         //  <!-- postgres -->
         <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="80" height="80"/> </a> ,
         //  <!-- postman -->
         <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="80" height="80"/> </a> ,
         //  <!-- python -->
         <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="80" height="80"/> </a> ,
         //  <!-- reactjs -->
         <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80"/> </a>,
         // //  <!-- reactnative -->
         // <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="80" height="80"/> </a> ,
         // <!-- redux -->
         <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="80" height="80"/> </a>, 
         //  <!-- sqlite -->
         <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="80" height="80"/> </a> 
      ]
      
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
