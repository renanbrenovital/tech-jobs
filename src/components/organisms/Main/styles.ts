import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.background }
`;