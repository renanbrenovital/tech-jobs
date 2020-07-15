import React from 'react';
import { TypeSelect } from '../../../types/types';
import { Select } from './styles';

export default ( props: TypeSelect) => <Select {...props}>{props.children}</Select>;