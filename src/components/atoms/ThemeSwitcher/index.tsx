import React, {useState} from 'react';
import { Switch } from './styles';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');
  
  const toogle = () => {
    setTheme(value => value === 'light' ? 'dark' : 'light');
  }
  
  return (
    <Switch>
      <input id="switch" className="switch" type="checkbox" onClick={toogle} />
  <label htmlFor="switch">{theme}</label>
    </Switch>
  );
};

export default ThemeSwitcher;