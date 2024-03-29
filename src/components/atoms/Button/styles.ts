import styled from 'styled-components';

export const Button = styled.button`
  color: ${({ theme }) => theme.button.text};
  padding: 0.8rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: bold;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.button.border};  
  background: transparent;
  outline:0;
  
  &:hover {
    background-color: ${({ theme }) => theme.button.hover.background};
  }  
`;