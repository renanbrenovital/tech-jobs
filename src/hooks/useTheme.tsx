import { useState, useCallback } from 'react';

export const useTheme = () => {
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

  return {theme, toggle};
}
