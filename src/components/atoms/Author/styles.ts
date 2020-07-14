import styled from 'styled-components';

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;