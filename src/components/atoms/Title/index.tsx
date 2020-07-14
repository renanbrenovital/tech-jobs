import React from 'react';
import { Heading } from '../../../types/types';
import { H1, H2 } from './styles';

export default ({ level, children }: Heading) => level === 1 ? <H1>{children}</H1> : <H2>{children}</H2>;