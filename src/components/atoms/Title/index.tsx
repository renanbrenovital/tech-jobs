import React from 'react';
import { H1 } from './styles';

type Props = {
  children: string;
}

const Title = (props: Props) => <H1>{props.children}</H1>;

export default Title;