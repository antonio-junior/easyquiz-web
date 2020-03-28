import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Routes from './routes';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    font-family: 'Source Sans Pro', sans-serif;
    overflow-x: hidden;
    font-weight: 400;
    background-color: #f5f6f7;
  }
`;

const App = () => (
  <Router>
    <GlobalStyle />
    <Routes />
  </Router>
);

export default App;
