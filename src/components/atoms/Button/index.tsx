import React from 'react';
import { TypeButton } from '../../../types/types';
import { Button } from './styles';

export default ({ onClick, children }: TypeButton) => <Button onClick={onClick}>{children}</Button>;