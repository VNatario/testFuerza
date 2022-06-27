import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  :root {
    font-size: 62.5%;
    /* 1rem = 10px */
  }

  body {
    background-color: #F8E5D6;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow-x: hidden;

    a{
      all:unset;
      cursor: pointer;
    }

    button {
      cursor: pointer;
    }

  }
`;
