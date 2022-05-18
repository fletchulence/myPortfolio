import styled from "styled-components";
import background from './../images/background_photos/geran-de-klerk-WJkc3xZjSXw-unsplash.webp';

const StyledHeader = styled.header`
   margin: 0;
   position: top;
   width: 100%;
   height: 100vh;
   top: 0;
   // z-index: 2;
`
const BannerImage = styled.div`
    width: 100%;
    height: 100vh;

    margin: 0;
    background-image: url(${background});
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
   BannerImage
}

