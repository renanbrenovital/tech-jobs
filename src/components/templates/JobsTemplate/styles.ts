import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 80vh;
  padding: 3vw;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.colors.background };
`;

export const List = styled.ul`
  margin:0;
  padding:0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
`;