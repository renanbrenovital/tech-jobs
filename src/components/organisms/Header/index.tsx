import React from 'react';
import Title from '../../atoms/Title';
import Navigation from '../../molecules/Navigation';
import ThemeSwitcher from '../../atoms/ThemeSwitcher';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Title>Tech Jobs</Title>
      <Navigation />
      <ThemeSwitcher />
    </Container>
  );
}

export default Header;