import React from 'react';
import { H1, H2 } from './styles';

type Props = {
  level: number;
  children: string;
}

export default (props: Props) => props.level === 1 ? <H1>{props.children}</H1> : <H2>{props.children}</H2>;