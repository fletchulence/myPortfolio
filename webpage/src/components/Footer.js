import React from 'react';
import styled from 'styled-components';
import logo from './../assets/icons/githublogo.png'

const GitLogo = styled.img`
  background-image: url(${logo});
  width: 20%;
  height: 10vh;
  background-size: contain;
  background-repeat: no-repeat;
`

export default function Footer() {
  return (
    <div>
      <GitLogo/>
    <nav>
      <a href='https://www.linkedin.com/in/david-a-fletcher/'> LinkedIn </a>
      <a href='https://github.com/fletchulence'>github</a>
      {/* <GitLogo todo: add an oncilck so that it will go to my page/> */}

      Facebook? No
      View resume -&gt; protected
    </nav>
    </div>
  )
}
