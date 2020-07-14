import React from 'react';

import Title from '../../atoms/Title';
import ThemeSwitcher from '../../atoms/ThemeSwitcher';

import Navigation from '../../molecules/Navigation';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Title level={1}>Tech Jobs</Title>
      <Navigation />
      <ThemeSwitcher />
    </Container>
  );
}

export default Header;