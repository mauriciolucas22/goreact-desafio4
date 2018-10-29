import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

import { Spinner } from '../components/Loading/styles';

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

  .container {
    height: 100%;
    width: 1200px;

    ${Spinner} {
      height: 100px;
      width: 100px;
    }
  }
`;
