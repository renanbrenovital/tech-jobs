import styled from 'styled-components';

export const Svg = styled.svg`
  display: flex;
  align-self: center;
  justify-self: center;
`;

export const Path = styled.path.attrs(props => ({
  fill: props.theme.colors.secondary,
}))``;