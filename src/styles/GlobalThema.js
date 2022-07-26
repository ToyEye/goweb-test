import { modernNormalize } from 'styled-modern-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ${modernNormalize}
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
        margin: 0;
        font-family:  'Open Sans',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
     
    }

    html {
scroll-behavior: smooth;
}
    p {
      margin: 0;
      padding: 0;
    }
    button {
      background: none;
      border: none;
      margin: 0;
      padding: 0;
    }
    img{
    width: 100%;
      display:block;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    h1, h2, h3 {
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
    }
    input::-webkit-contacts-auto-fill-button, 
    input::-webkit-credentials-auto-fill-button {
      visibility: hidden;
      position: absolute;
      right: 0;
    }
    @media screen and (max-width: 428px) {
      ::-webkit-scrollbar {
        display: none;
      }
    
      ::-webkit-scrollbar-track {
        display: none;
      }
    
      ::-webkit-scrollbar-thumb {
        display: none;
      }
    }
    ::-webkit-scrollbar {
      width: 5px;
    }
      .navigationContainer {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
    /* transitions */
    .modal-enter {
      opacity: 0;
    }
    .modal-enter-active {
      opacity: 1;
      transition: opacity 300ms linear;
    }
    .modal-exit {
      opacity: 1;
    }
    .modal-exit-active {
      opacity: 0;
      transition: opacity 300ms linear;
    }

`;

export default GlobalStyles;
