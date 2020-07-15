import React from 'react';
import { TypeButton } from '../../../types/types';
import { Button } from './styles';

export default ( props: TypeButton) => <Button {...props}>{props.children}</Button>;