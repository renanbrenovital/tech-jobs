import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  padding: 0 5vw;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.title};
`;