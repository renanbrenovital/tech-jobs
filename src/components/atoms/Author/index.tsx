import React from 'react';
import { Author } from '../../../types/types';
import { Link } from './styles';

export default ({ url, name }: Author) => <Link href={url} target="blank">{name}</Link>;