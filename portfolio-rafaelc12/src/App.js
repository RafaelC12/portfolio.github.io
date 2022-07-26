import React from 'react'
import Router from './router/Router';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
