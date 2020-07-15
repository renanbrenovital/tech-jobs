import React from 'react';
import { TypeInput } from '../../../types/types';
import { Input } from './styles';

export default ( props: TypeInput) => <Input {...props} placeholder={props.name} />;