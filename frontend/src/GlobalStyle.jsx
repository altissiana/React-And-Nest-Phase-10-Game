import { createGlobalStyle } from "styled-components";
import { blue, green } from './utils/colors'; 

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  background: #A0A9CC;
  color: #fff;
  font-size: 1.5em;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", sans-serif;
  font-weight: 100;
  text-align: center;
}

  // html,
  // body {
  //   margin: 0;
  //   padding: 0;
  //   width: 100%;
  //   height: 100%; 
  //   color: #fff;
  //   box-sizing: border-box;
  //   background-color: background: hsla(213, 74%, 11%, 1);
  //   background: linear-gradient(90deg, hsla(213, 74%, 11%, 1) 0%, hsla(250, 14%, 61%, 1) 100%);
  //   background: -moz-linear-gradient(90deg, hsla(213, 74%, 11%, 1) 0%, hsla(250, 14%, 61%, 1) 100%);
  //   background: -webkit-linear-gradient(90deg, hsla(213, 74%, 11%, 1) 0%, hsla(250, 14%, 61%, 1) 100%);
  //   filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#07192F", endColorstr="#918CA9", GradientType=1 );
  //   transform: rotate(180deg);
  //   font-family: 'Roboto', sans-serif;
  //   -webkit-box-sizing: border-box;
  //   -moz-box-sizing: border-box;
  // }

  // *, *::before, *:after {
  //   box-sizing: inherit;
  // }

  .input--focused {
    opacity: 1;
  }
`;

export const colorPalette = {
  lavender: blue[200],
  softPurple: blue[500],
  mossGreen: green[500],
}