import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vh;
  padding: 0 5vw;
  background-color: ${({ theme }) => theme.colors.primary};
`;