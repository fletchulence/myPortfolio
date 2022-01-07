import { createGlobalStyle } from "styled-components";
import theme from "./themes";

const GlobalStyle = createGlobalStyle`
   body{
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.secondary.light};
   }

   h1,
   h2,
   h3{
      margin: 0px;
      font-weight: 600;
      color: 'blue';
   }

`

export default GlobalStyle;