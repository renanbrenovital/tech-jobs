import styled from 'styled-components';

export const Container = styled.div`
`;

export const Main = styled.main`
  height: 80vh;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.colors.background }
`;