import React from 'react';

// image imports
import anywhere_thumb from '../assets/images/anywhere_dashboard1.webp';
import potluck_thumb from '../assets/images/potluck_home.webp';
import nasa_thumb from '../assets/images/nasa_home.webp';
import african_mp from '../assets/images/African_marketPlace.webp';
import underdog_thumb from '../assets/images/underdog_devs.webp';

// importing theme -- when can i stop doing this??
import theme from './../assets/styles/themes'

import ProjCard from './ProjectCard'

// MUI IMPORTS:
import { 
   Box, 
   Container 
} from '@mui/material';

// const anywhere_thumb = React.lazy(() => import('../assets/images/anywhere_dashboard1.webp'));
// const potluck_thumb = React.lazy(() => import('../assets/images/potluck_home.webp'));
// const

//todo: add alt txt for the imgs
const ProjCardInfo = [
   {
      proj_name: 'HumanRights First',
      role: 'Backend Developer',
      image: underdog_thumb,
      linkFor: '',
      bullet1: '● Collaborated with multiple teams on overall coding standards and testing suites within mentor-driven software development trade school for recently incarcerated individuals',
      bullet2: '● Created standardized response codes from backend API endpoints to conform to REST best practices which will carry forward for future developer teams',
      bullet3: '● Revised Jest testing suite to create cohesive test results that better align with response data from user inputs',
      icon_color: theme.palette.tertiary.text,
      github_link: 'https://github.com/fletchulence/underdog-devs-be-a#endpoints',
      comments_section: '',
      likes: 20
   },
   {
      proj_name: 'Potluck Planner',
      role: 'Project Manager',
      image: potluck_thumb,
      linkFor: 'https://potluck1-front-end.vercel.app/',
      bullet1: `● Facilitated test-driven development, collaboration between 5 developers, and coordinated project goals in development of React app to facilitate planning of potluck events.
      ● Utilized GitHub to review component updates, pull-requests, and merge conflicts and deployed via Vercel`,
      bullet2: '● Implemented Axios protected routes and ensured persistence of State management within cloud-native application',
      bullet3: '● Established styling for responsive hamburger menu using Material-UI and media queries',
      icon_color: '#ef5350',
      github_link: 'https://github.com/Potluck-Planner-A/front-end',
      comments_section: '',
      likes: 33
   },
   {
      proj_name: 'Nasa Photo of the Day',
      role: 'Creator',
      image: nasa_thumb,
      linkFor: 'https://nasa-photo-of-the-day-seven-kappa.vercel.app/',
      bullet1: '● Went above and beyond on this project -- doesnt look too complex, but this was the first time that i actually worked with pulling from an API. I am very happy with this product.',
      bullet2: '● Learned to make a calendar output with a form. This was very advanced for the time i started doing it, but i started understanding more and more as time went on.',
      bullet3: '● You will notice that nothing in this project is strictly written. All is populated. Fully modular.',
      icon_color: theme.palette.primary.borders,
      github_link: 'https://github.com/fletchulence/nasa-photo-of-the-day',
      comments_section: '',
      likes: 10
   },
   {
      proj_name: 'African Marketplace',
      role: 'Frontend Developer',
      image: african_mp,
      linkFor: '',
      bullet1: '● This was my First experience working on a team and with github',
      bullet2: '● Used mostly styled components and theme setting to make the frontend for the web page',
      bullet3: '● The API isnt pulling correctly from the one that was set up, but this was something that happened beacuse we didnt have a proper devoted team member in the backend role. Eventually I want to go back to this and redevelop a backend for it.',
      icon_color: theme.palette.tertiary.text,
      github_link: 'https://github.com/Build-Week-ft-african-marketplace-1/front-end/tree/main/african-marketplace',
      comments_section: '',
      likes: 4
   },
   {
      proj_name: 'Anywhere Fitness',
      role: 'Full Stack Developer',
      image: anywhere_thumb,
      linkFor: 'https://front-end-chi-livid.vercel.app/',
      bullet1: `● Single-handedly created responsive React platform and designed backend PostgreSQL database for app that enables
      fitness instructors and students to schedule classes`,
      bullet2: `● Developed Node.js backend of student attendance punch pass system to enable students to track class-specific
      progress using Knex to seed and populate tables and Express to generate endpoints for frontend hooks`,
      bullet3: '● Assisted Frontend with state and Axios calls to my Heroku database to ensure correct data pull-through',
      icon_color: '#ef5350',
      github_link: 'https://github.com/Build-Week-Anywhere-Fitness-6-2021',
      comments_section: '',
      likes: 25,
   },
]

function Projects() {
   return (
      <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            outline: theme.palette.primary.main.text,
         }} >
         <Box sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-around',
            alignSelf: 'center',
         }}>
            {/* <Suspense fallback= {<>...Loading</>}> */}
            {ProjCardInfo.map((el, idx) =>
               <ProjCard
                  key={idx}
                  likes={el.likes}
                  proj_name={el.proj_name}
                  role={el.role}
                  linkFor={el.linkFor}
                  image={el.image}
                  bullet1={el.bullet1}
                  bullet2={el.bullet2}
                  bullet3={el.bullet3}
                  github_link={el.github_link}
               > 
                  {el} 

               </ProjCard>
               
               )}
               {/* </Suspense> */}
         </Box>
      </Container>
   )
}

export default Projects;
