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
      item: `why I studied mechanical engineering...`, 
      contents: [
            <Typography paragraph fontWeight={'medium'}>
               I love figuring out how things work. I (along with many others with engineering minds)
               have a full drawer of broken things just in case I have use for the parts.
               I have learned very much from the process of breaking things apart and ...usually...
               putting them back together. 
            </Typography>,
            <Typography paragraph fontWeight={'medium'}>
               I use the same mentality every day as a Web Developer to test my code. 
               If I encounter a bug: Fix it, Recreate it, Fix again, Refactor.
               This is the engineering process: Hypothesis, Test, Theory, Test, Theorum 
               {/* I break down how and why it happened by trying to recreate it, test it, recreate it again 
               and voila. Breaking  recreating the bug  it by recreating the bug (breaking it again), making sure that  */}
            </Typography>
      ]
   },
   {
      item: `what I learned from sales...`, 
      contents:[ 
         <Typography paragraph fontWeight={'medium'}>
            I discovered a passion for working with customers and stepping through their thought process to find their ideal product vision. 
            Looking back on my experience here, the reason why I loved the role so much was because it was so hands-on with solving the problem. 
            I was given direct exposure to people in this role and, truth be told, that was the only reason why I enjoyed it.
         </Typography>,
            // I am not a shark. I have a lot of respect for the salespeople in the world, they are very hard workers and deserve every penny for the margin they work in, but that is not me.  \n 
         <Typography paragraph fontWeight={'medium'}>
            I am so grateful for this role providing me with exposure to the nuances of warehouse managment and shipping & handling. 
            I learned a lot about the importance of knowing your customers and keeping open communication with as well as your support staff.

         </Typography>
      ]
   },
   {
      item: `why I became a developer...`, 
      contents:[
         <Typography paragraph fontWeight={'medium'}>
            I want to help people bring their ideas to life. Being a Software Developer allows me to follow my passions as a problem solver.
            Attack new situations from an unlimited number of angles. Such problems bring out the creative side in me which I enjoy channeling. 
         </Typography>, 
         <Typography paragraph fontWeight={'medium'}>
            As a Developer I am also provided the privelage to connect with so individuals around the world remotely. Many platforms allow me to learn from and/or help
            the people I meet which is very special about this profession. Growing my network like this provides unlimited exposure to stay on top of new learnings and trends.
         </Typography>, 
         <Typography paragraph fontWeight={'medium'}>
            I have mastered the fundamentals of Software Development and I am equipt with the skills to research and formulate a strategy
            to tackle new situations as they arise.
         </Typography>
      ]
      // perhaps add link to what else you learned somewhere
   },
   {
      item: `what I've learned...`, 
      contents: [
         // <!-- arduino -->
         <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original-wordmark.svg" alt="arduino" width="80" height="80"/> </a> ,
         //  <!-- bootstrap -->
         <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original-wordmark.svg" alt="bootstrap" width="80" height="80"/> </a>,
         //  <!-- css3 -->
         <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="80" height="80"/> </a> ,
         //  <!-- cypress -->
         <a href="https://www.cypress.io" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg" alt="cypress" width="80" height="80"/> </a> ,
         //todo  <!-- express -- TODO: change this so we can see -->
         <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="80" height="80"/> </a> ,
         //  <!-- git -->
         <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="80" height="80"/> </a> ,
         //  <!-- heroku -->
         <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original-wordmark.svg" alt="heroku" width="80" height="80"/> </a> ,
         //  <!-- materialui -->
         <a href="https://mui.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" alt="materialui" width="80" height="80"/> </a> ,
         //  <!-- npm -->
         <a href="https://npm.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="80" height="80"/> </a> ,
         //  <!-- vscode -->
         <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original-wordmark.svg" alt="vscode" width="80" height="80"/> </a> ,
         //  <!-- mysql -->
         <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="mysql" width="80" height="80"/> </a> ,
         //  <!-- gatsby -->
         <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gatsby/gatsby-original.svg" alt="gatsby" width="80" height="80"/> </a> ,
         //  <!-- python -->
         <a href="https://www.python.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original-wordmark.svg" alt="python" width="80" height="80"/> </a> ,
         //  <!-- docker -->
         <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="80" height="80"/> </a> ,
         //  <!-- devicon -->
         <a href="https://devicon.dev/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/devicon/devicon-original-wordmark.svg" alt="devicon" width="80" height="80"/> </a> ,
         //  <!-- html5 -->
         <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="80" height="80"/> </a> ,
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
         <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain-wordmark.svg" alt="nodejs" width="80" height="80"/> </a> ,
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
