import React from 'react';
import { useTheme } from './hooks/useTheme';

import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

import Home from './pages/Home';
import AppContext from './context/themeContext';
import { ThemeState } from './types/types';

const App = () => {  
  const { theme, toggle }:ThemeState = useTheme();
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppContext.Provider value={{theme, toggle}}>
        <Home />
      </AppContext.Provider>     
    </ThemeProvider>
  );
}

export default App;
