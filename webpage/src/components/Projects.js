import React from 'react';

// image imports
import anywhere_thumb from '../assets/images/anywhere_dashboard1.webp';
import potluck_thumb from '../assets/images/potluck_home.webp';
import nasa_thumb from '../assets/images/nasa_home.webp';
import african_mp from '../assets/images/African_marketPlace.webp';

// importing theme -- when can i stop doing this??
import theme from './../assets/styles/themes'

import ProjCard from './ProjectCard'

// MUI IMPORTS:
import { Box, Container } from '@mui/material';

//todo: add alt txt for the imgs
const ProjCardInfo = [
   {
      proj_name: 'Anywhere Fitness',
      role: 'Back End Dev',
      image: anywhere_thumb,
      linkFor: 'https://front-end-chi-livid.vercel.app/',
      bullet1: 'This is still a Work in progress! ',
      bullet2: 'I was the only person assigned to the back end of this project. I am still working out kinks.',
      bullet3: 'Trying to add the classes to each person, so that they auto populate correctly. I will probably be working on this project for some time :)',
      icon_color: '#ef5350',
      github_link: 'https://github.com/Build-Week-Anywhere-Fitness-6-2021',
      comments_section: ''
   },
   {
      proj_name: 'Potluck Planner',
      role: 'Project Manager',
      image: potluck_thumb,
      linkFor: 'https://potluck1-front-end.vercel.app/',
      bullet1: 'worked to help the backend and frontend communicate',
      bullet2: 'fixed issues with styling',
      bullet3: 'Passed props where appropriate',
      icon_color: '#ef5350',
      github_link: 'https://github.com/Potluck-Planner-A/front-end',
      comments_section: ''
   },
   {
      proj_name: 'Nasa Photo of the Day',
      role: 'Creator',
      image: nasa_thumb,
      linkFor: 'https://nasa-photo-of-the-day-seven-kappa.vercel.app/',
      bullet1: 'went above and beyond on this project -- doesnt look too complex, but this was the first time that i actually worked with pulling from an API. I am very happy with this product.',
      bullet2: 'Learned to make a calendar output with a form. This was very advanced for the time i started doing it, but i started understanding more and more as time went on.',
      bullet3: 'You will notice that nothing in this project is strictly written. All is populated. Fully modular.',
      icon_color: theme.palette.primary.borders,
      github_link: 'https://github.com/fletchulence/nasa-photo-of-the-day',
      comments_section: ''
   },
   {
      proj_name: 'African Marketplace',
      role: 'Creator',
      image: african_mp,
      linkFor: '',
      bullet1: 'This was my First experience working on a team and with github',
      bullet2: 'Used mostly styled components and theme setting to make the frontend for the web page',
      bullet3: 'The API isnt pulling correctly from the one that was set up, but this was something that happened beacuse we didnt have a proper devoted team member in the backend role. Eventually I want to go back to this and redevelop a backend for it.',
      icon_color: theme.palette.tertiary.text,
      github_link: 'https://github.com/Build-Week-ft-african-marketplace-1/front-end/tree/main/african-marketplace',
      comments_section: ''
   },
]

function Projects() {
   return (
      <Container
         sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            outline: theme.palette.primary.main.text,
            // backgroundColor: 'clear',
         }} >
            {/* <h1> Projects: </h1> */}
         <Box sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-between',
            width: '80%',
            alignSelf: 'center',
         }}>
            {ProjCardInfo.map((e, idx) =>
               <ProjCard
               key={idx}
               proj_name={e.proj_name}
               role={e.role}
               linkFor={e.linkFor}
               image={e.image}
               bullet1={e.bullet1}
               bullet2={e.bullet2}
               bullet3={e.bullet3}
               github_link={e.github_link}
               > {e} </ProjCard>
               )}
         </Box>
      </Container>
   )
}

export default Projects;
