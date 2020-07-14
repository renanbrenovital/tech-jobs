import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.title};
`;

export const H2 = styled.h1`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.card.title};
`;