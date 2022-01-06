//TODO:  STILL NEED TO INSTALL MUI ?

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';

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

function Projects(props) {
   return (
      <Card variant="outlined">
         <h1> Projects </h1>
         <p>
            -- these are my projects -- <br/> 
            there will be a grid of projects here:
         </p>
         {ProjLinks.map((e)=>   
            <Card sx={{ display: 'flex'}}> {e} </Card> 
         )}
      </Card>
   )
}


export default Projects;
