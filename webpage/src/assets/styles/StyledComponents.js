import styled from "styled-components";
import treesBackground from './../images/background_photos/geran-de-klerk-WJkc3xZjSXw-unsplash.webp';
import woodBackground from './../images/background_photos/woodBackground.webp';

const StyledHeader = styled.header`
   margin: 0;
   position: top;
   width: 100%;
   height: 10vh;
   top: 0;
   // z-index: 2;
`
const TreesBackground = styled.div`
    margin: 0;
    padding: 5%;
    width: 100%;
    height: auto;
    background-attachment: fixed;
    background-image: url(${treesBackground});
    background-size: cover;
   //  display: flex;
    align-self: center;
    justify-content: center;
    `

const WoodBackground = styled.div`
   margin: 0;
   padding: 5%;
   width: 100%;
   height: auto;
   background-attachment: fixed;
   background-image: url(${woodBackground});
   background-size: cover;
   //  display: flex;
   align-self: center;
   justify-content: center;
`

const StyledButton = styled.button`
   
`

const StyledLink = styled.link`

`

const StyledFooter = styled.footer`
    width: 100%;
    height: 30vh;

    margin: 0;
   //  background-image: none;
   //  background-size: cover;
    display: flex;
    align-self: center;
    justify-content: center;
`

export { 
   StyledHeader, 
   StyledFooter,
   TreesBackground,
   WoodBackground,
}

