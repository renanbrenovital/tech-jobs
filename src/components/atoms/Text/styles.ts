import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ theme }) => theme.card.text};
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;    
  font-weight: 400;
`;