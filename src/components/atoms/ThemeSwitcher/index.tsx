import React from 'react';
import { Input, Label } from './styles';
import AppContext from '../../../context/themeContext';

const ThemeSwitcher = () => {
  return (
    <AppContext.Consumer>
      {value => (
        <> 
          <Input id="switch" type="checkbox" onChange={() => value.toggle()} checked={value.theme === 'dark'} />
          <Label htmlFor="switch" />
        </>
      )
      }
    </AppContext.Consumer>
  );
};

export default ThemeSwitcher;