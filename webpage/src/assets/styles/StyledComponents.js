import styled from "styled-components";
import theme from "./themes";
import treesBackground from './../images/background_photos/geran-de-klerk-WJkc3xZjSXw-unsplash.webp';
import woodBackground from './../images/background_photos/woodBackground.webp';

const StyledHeader = styled.header`
   margin: 0;
   position: top;
   width: 100%;
   height: auto;
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
   background-size: contain;
   // align-self: center;
   // justify-content: center;
   `

const WoodBackground = styled.div`
   display: flex;

   margin: 0;
   padding: 5%;
   width: 100%;
   height: auto;
   background-attachment: fixed;
   background-size: cover;
   background-image: url(${woodBackground});
   // align-self: center;
   flex-flow: row wrap;
   // justify-content: center;
`

const StyledButton = styled.button`
   
`

const StyledLink = styled.link`

`

const StyledFooter = styled.footer`
    width: 100%;
    height: auto;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    background-image: linear-gradient( ${theme.palette.primary.light}, ${theme.palette.secondary.light});
    padding: 5%;
`

export { 
   StyledHeader, 
   StyledFooter,
   TreesBackground,
   WoodBackground,
}

