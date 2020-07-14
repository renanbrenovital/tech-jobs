import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyles from './styles/global';
import Home from './pages/Home';
import AppContext from './context/themeContext';

const App = () => {
  const initialTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(initialTheme);
  
  const toggle = useCallback(() => {
    if(theme === 'light') {
      localStorage.setItem('theme', 'dark');      
      setTheme('dark');
    }
    else {
      localStorage.setItem('theme', 'light');      
      setTheme('light');
    }
  }, [theme]);
  
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
