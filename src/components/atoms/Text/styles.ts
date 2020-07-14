import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ theme }) => theme.card.text};
  font-size: 1rem;  
  font-weight: 400;
  margin: 1vw;
  padding: 0;
`;