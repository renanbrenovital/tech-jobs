import { createContext } from 'react';
import { ThemeState } from '../types/types';

const AppContext = createContext<ThemeState>({
  theme: 'light',
  toggle: () => {}
});

export default AppContext;