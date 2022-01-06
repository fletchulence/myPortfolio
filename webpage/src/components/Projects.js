//TODO:  STILL NEED TO INSTALL MUI ?

import React from 'react';
import { Link } from 'react-router-dom';

// image imports
import anywhere_thumb from '../assets/images/anywhere_dashboard1.png';
import potluck_thumb from '../assets/images/potluck_home.png';
import nasa_thumb from '../assets/images/nasa_home.png';

import Foreign from './Foreign'

//MUI IMPORTS:
import {
   Card 
} from '@mui/material';


const ProjCardInfo = [
   {
      name: 'Anywhere Fitness',
      role: 'Back End Dev',
      image: anywhere_thumb,
      linkFor: 'https://front-end-chi-livid.vercel.app/',
      bullet1: 'This is still a Work in progress! ',
      bullet2: 'I was the only person assigned to the back end of this project. I am still working out kinks.',
      bullet3: 'Trying to add the classes to each person, so that they auto populate correctly. I will probably be working on this project for some time :)',
   },
   {
      name: 'Potluck Planner',
      role: 'Project Manager',
      image: potluck_thumb,
      linkFor: 'https://potluck1-front-end.vercel.app/',
      bullet1: 'worked to help the backend and frontend communicate',
      bullet2: 'fixed issues with styling',
      bullet3: 'Passed props where appropriate',
   },
   {
      name: 'Nasa Photo of the Day',
      role: 'Creator',
      image: nasa_thumb,
      linkFor: 'https://nasa-photo-of-the-day-seven-kappa.vercel.app/',
      bullet1: 'went above and beyond on this project -- doesnt look too complex, but this was the first time that i actually worked with pulling from an API. I am very happy with this product.',
      bullet2: 'Learned to make a calendar output with a form. This was very advanced for the time i started doing it, but i started understanding more and more as time went on.',
      bullet3: 'You will notice that nothing in this project is strictly written. All is populated. Fully modular.',
   },
]

// Links to projects
const Link1 = 'https://nasa-photo-of-the-day-seven-kappa.vercel.app/'; // nasa PhotoOfTheDay
const Link2 = 'https://front-end-chi-livid.vercel.app/'

const ProjLinks = [
   // 'https://nasa-photo-of-the-day-seven-kappa.vercel.app/',
   // 'https://front-end-tau-ashen.vercel.app/',
   <a href={ Link2 } target='_blank' rel="noopener noreferrer"> Anywhere Fitness </a>,
   <a href={ Link1 } target='_blank' rel="noopener noreferrer"> Nasa Photo of the Day </a>,
   // <a href={ /* Link1 */ } target='_blank' rel="noopener noreferrer"> Nasa Photo of the Day </a>,
]

// let arr = [];

function Projects() {
   return (
      <Card variant="outlined">
         <h1> Projects </h1>
         <p>
            -- these are my projects -- <br/> 
            there will be a grid of projects here:
         </p>
         {ProjCardInfo.map((e, idx)=>   
            <Foreign 
               key={idx}
               name={e.name}
               role={e.role}
               linkFor={e.linkFor}
               image={e.image}
               bullet1={e.bullet1}
               bullet2={e.bullet2}
               bullet3={e.bullet3}
            > {e} </Foreign> 
         )}
      </Card>
   )
}


export default Projects;
