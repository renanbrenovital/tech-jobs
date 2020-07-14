import styled from 'styled-components';

export const Link = styled.a`
  color: ${({ theme }) => theme.card.text};
  font-weight: bold;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;