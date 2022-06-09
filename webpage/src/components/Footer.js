import React from 'react';
import styled from 'styled-components';
import gitLogo from './../assets/icons/github-sign.webp'
import linkedinLogo from './../assets/icons/linkedinlogo.webp'
import twitterLogo from './../assets/icons/twitterLogo.webp'

//MUI
import { Typography } from '@mui/material';

const GitLogo = styled.div`
  background-image: url(${gitLogo});
  height: 10vh;
  margin-bottom: 5%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 20vw;
    :hover {
      cursor: pointer;
    }
  // attribute: 
  // <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a>
  `
  
  const LinkedInLogo = styled.div`
  background-image: url(${linkedinLogo});
  width: 20vw;
  height: 10vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
    :hover {
      cursor: pointer;
    }
  `
    
  const TwitterLogo = styled.div`
  background-image: url(${twitterLogo});
  width: 20vw;
  height: 10vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
    :hover {
      cursor: pointer;
    }
  `

export default function Footer() {
  const handleErrorClick = ()=>{
    alert('-- these arent working just yet -- Come back soon for the revamp!')
  }

  const navigateLinkedIn = () => {
    window.open('https://www.linkedin.com/in/david-a-fletcher/', '_blank')
  }
  const navigateGithub = () => {
    window.open('https://github.com/fletchulence', '_blank')
  }
  // const navigateTwitter = () => {
  //   window.open('linkFor', '_blank')
  // }
  // let test = document.getElementById('test')
  // test.addEventListener('mouseover', function(e){
  //   console.log(e)
  // })
  const logo = document.querySelector('div')

  return (
    <>
      <LinkedInLogo onClick={navigateLinkedIn} onMouseOver=''/>
      <GitLogo onClick={navigateGithub}/>
      <TwitterLogo onClick={handleErrorClick}/>
    {/* <nav>
      <a href='https://www.linkedin.com/in/david-a-fletcher/' target='_blank' rel='noreferrer'> LinkedIn </a>
      <a href='https://github.com/fletchulence' target='_blank' rel='noreferrer'>github</a>
    </nav> */}
    <br/>
      <Typography variant='subtitle3' sx={{ fontSize: 'small' }}>
        <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Dave Gandy - Flaticon</a>        <br/>
        <a href="https://www.flaticon.com/free-icons/twitter" title="twitter icons">Twitter icons created by Google - Flaticon</a>
      </Typography>
    </>
  )
}
