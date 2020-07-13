import React from 'react';
import { Switch } from './styles';
import AppContext from '../../../context/themeContext';

const ThemeSwitcher = () => {
  return (
    <AppContext.Consumer>
      {value => (
        <Switch>
          <input id="switch" className="switch" type="checkbox" onChange={() => value.toggle()} checked={value.theme === 'dark'} />
          <label htmlFor="switch"></label>
        </Switch>
      )
      }
    </AppContext.Consumer>
  );
};

export default ThemeSwitcher;