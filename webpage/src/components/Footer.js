import React from 'react';
import styled from 'styled-components';
import gitLogo from './../assets/icons/githublogo.webp'
import linkedinLogo from './../assets/icons/linkedinlogo.webp'

const GitLogo = styled.div`
  background-image: url(${gitLogo});
  // width: 20%;
  height: 10vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: auto;
  flex-direction: column;
  `
  
  const LinkedInLogo = styled.div`
  background-image: url(${linkedinLogo});
  border: none;
  flex-flow: column;
  display: flex;
  width: auto;
  height: 10vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

export default function Footer() {
  const handleErrorClick = ()=>{
    alert('-- these arent working just yet -- Come back soon for the revamp!')
  }

  return (
    <div>
      <GitLogo onClick={handleErrorClick}/>
      <LinkedInLogo onClick={handleErrorClick}/>
    <nav>
      <a href='https://www.linkedin.com/in/david-a-fletcher/' target='_blank' rel='noreferrer'> LinkedIn </a>
      <a href='https://github.com/fletchulence' target='_blank' rel='noreferrer'>github</a>
     

      {/* Facebook? No
      View resume -&gt; protected */}
    </nav>
    </div>
  )
}
