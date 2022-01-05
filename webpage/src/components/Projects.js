//TODO:  STILL NEED TO INSTALL MUI ?

import React from 'react';
import { Link } from 'react-router-dom';

// Links to projects
const Link1 = 'https://nasa-photo-of-the-day-seven-kappa.vercel.app/'; // nasa PhotoOfTheDay
const Link2 = 'https://front-end-tau-ashen.vercel.app/'

const ProjLinks = [
   // 'https://nasa-photo-of-the-day-seven-kappa.vercel.app/',
   // 'https://front-end-tau-ashen.vercel.app/',
   <Link to={Link2}> hello </Link>,
   <Link to={Link1}> Nasa Photo of the Day </Link>,
   // {Link2}
]

// let arr = [];

function Projects(props) {
   // const projectsArr = [
   //    { Link1 },
   //    { Link2 },
   //    // { Link3 }
   // ]
   // console.log(projectsArr)
   // console.log(arr)
   return (
      <div>
         <h1> Projects </h1>
         <p>
            -- these are my projects -- <br/> 
            there will be a grid of projects here:
         </p>
         {ProjLinks.map((e)=>   
            <ul> 
               <li> {e} </li> 
            </ul> 
         )}
      </div>
   )
}


export default Projects;
