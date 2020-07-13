import { createContext } from 'react';

type TypeState = {
  theme: string;
  toggle: Function;
};

const AppContext = createContext<TypeState>({
  theme: 'light',
  toggle: () => {}
});

export default AppContext;