import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 80vh;
  padding: 3vw;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.colors.background }
`;