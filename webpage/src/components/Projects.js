import React from 'react';

// image imports
import anywhere_thumb from '../assets/images/anywhere_dashboard1.png';
import potluck_thumb from '../assets/images/potluck_home.png';
import nasa_thumb from '../assets/images/nasa_home.png';

// importing theme -- when can i stop doing this??
import theme from './../assets/styles/themes'

import Foreign from './Foreign'

//MUI IMPORTS:
import { Card, Box } from '@mui/material';

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
   },
   {
      proj_name: 'Nasa Photo of the Day',
      role: 'Creator',
      image: nasa_thumb,
      linkFor: 'https://nasa-photo-of-the-day-seven-kappa.vercel.app/',
      bullet1: 'went above and beyond on this project -- doesnt look too complex, but this was the first time that i actually worked with pulling from an API. I am very happy with this product.',
      bullet2: 'Learned to make a calendar output with a form. This was very advanced for the time i started doing it, but i started understanding more and more as time went on.',
      bullet3: 'You will notice that nothing in this project is strictly written. All is populated. Fully modular.',
      icon_color: theme.palette.tertiary.text,
   },
]

// Links to projects
// const Link1 = 'https://nasa-photo-of-the-day-seven-kappa.vercel.app/'; // nasa PhotoOfTheDay
// const Link2 = 'https://front-end-chi-livid.vercel.app/'

// const ProjLinks = [
//    // 'https://nasa-photo-of-the-day-seven-kappa.vercel.app/',
//    // 'https://front-end-tau-ashen.vercel.app/',
//    <a href={ Link2 } target='_blank' rel="noopener noreferrer"> Anywhere Fitness </a>,
//    <a href={ Link1 } target='_blank' rel="noopener noreferrer"> Nasa Photo of the Day </a>,
//    // <a href={ /* Link1 */ } target='_blank' rel="noopener noreferrer"> Nasa Photo of the Day </a>,
// ]

// let arr = [];

function Projects() {
   return (
      <Card
         variant="outlined"
         sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            outline: theme.palette.primary.main.text,
            backgroundColor: theme.palette.primary.light,
         }} >
         <Box sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-between',
            width: '80%',
            alignSelf: 'center',
         }}>
            {ProjCardInfo.map((e, idx) =>
               <Foreign
                  key={idx}
                  proj_name={e.proj_name}
                  role={e.role}
                  linkFor={e.linkFor}
                  image={e.image}
                  bullet1={e.bullet1}
                  bullet2={e.bullet2}
                  bullet3={e.bullet3}
                  icon_color={e.icon_color}
               > {e} </Foreign>
            )}
         </Box>
      </Card>
   )
}

export default Projects;
