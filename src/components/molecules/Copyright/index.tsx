import React from 'react';
import Author from '../../atoms/Author';
import { Text } from './styles';

const Copyright = () => {
  return (
    <Text>Created by <Author url="https://github.com/renanbrenovital" name="Renan Vital" /></Text>
  );
}

export default Copyright;