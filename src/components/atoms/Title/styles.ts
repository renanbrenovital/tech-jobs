import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.title};
  margin: 1vw;
  padding: 0;
`;

export const H2 = styled.h1`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.card.title};
  margin: 1vw;
  padding: 0;
`;