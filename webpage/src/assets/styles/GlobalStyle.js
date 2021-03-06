import { createGlobalStyle } from "styled-components";
import theme from "./themes";

const GlobalStyle = createGlobalStyle`
   body{
      background-color: ${theme.palette.primary.light};
      color: ${pr => pr.theme.palette.tertiary.text};
      // overflow:visible;

   }
   #vanta{
      width: 100%;
      height: 100vh;
      // z-index: -1;
   }

   h1,
   h2,
   h3{
      margin: 0;
      font-weight: 600;
      color: 'blue';
   }

`

export default GlobalStyle;