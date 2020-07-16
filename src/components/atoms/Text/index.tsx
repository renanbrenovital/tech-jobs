import React from 'react';
import { TypeText } from '../../../types/types';
import { Text } from './styles';

export default (props: TypeText) => <Text {...props}>{props.children}</Text>;