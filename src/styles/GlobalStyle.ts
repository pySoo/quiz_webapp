import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font: inherit;
    border: 0;
    -webkit-tap-highlight-color: transparent;
  }
  
  html {
    width: 100vw;
    font-size: 62.5%;
  }
  
  body {
    width: 100vw;
    font-size: 1.6rem;
  }
  
  ul, ol, li {
    list-style: none;
  }

  input {
    border: none;
    outline: none;
  }

  textarea {
    resize: none;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
