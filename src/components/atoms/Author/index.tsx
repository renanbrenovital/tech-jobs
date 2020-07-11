import React from 'react';

interface Props {
  url: string;
  name: string;
}

const Author = (props: Props) => <a href={props.url} target="blank">{props.name}</a>;

export default Author;