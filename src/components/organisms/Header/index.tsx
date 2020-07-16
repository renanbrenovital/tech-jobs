import React from 'react';

import AppContext from '../../../context/themeContext';

import ThemeSwitcher from '../../atoms/ThemeSwitcher';
import logoWhite from '../../../assets/logo-white.png';
import logoBlack from '../../../assets/logo-black.png';

import { Container } from './styles';

const Header = () => {  
  return (
    <AppContext.Consumer>
    {value => 
      <Container>
        <img src={value.theme === 'dark' ? logoWhite : logoBlack} alt="logo" width={150} />
        <ThemeSwitcher data={{theme: value.theme, toggle: value.toggle}} />
      </Container>
    }
  </AppContext.Consumer>
  );
}

export default Header;