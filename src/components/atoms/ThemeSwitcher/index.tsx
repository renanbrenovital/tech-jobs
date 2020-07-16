import React from 'react';
import { Input, Label } from './styles';
import { TypeThemeSwitcher } from '../../../types/types';

const ThemeSwitcher = ({ data: { theme, toggle }}: TypeThemeSwitcher) => {
  return (
    <> 
      <Input id="switch" type="checkbox" onChange={() => toggle()} checked={theme === 'dark'} />
      <Label htmlFor="switch" />
    </>
  );
};

export default ThemeSwitcher;