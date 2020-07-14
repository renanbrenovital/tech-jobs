import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }  

  body {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Quicksand', sans-serif;
    font-size: 62.5%;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    transition: all 0.25s linear;
  }
`;