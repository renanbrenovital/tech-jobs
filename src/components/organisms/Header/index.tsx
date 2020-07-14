import React from 'react';

import Title from '../../atoms/Title';
import ThemeSwitcher from '../../atoms/ThemeSwitcher';

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Title level={1}>Tech Jobs</Title>
      <ThemeSwitcher />
    </Container>
  );
}

export default Header;