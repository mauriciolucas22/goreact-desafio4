import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #fff;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  button {
    cursor: pointer;
  }
`;
