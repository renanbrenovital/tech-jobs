import styled from 'styled-components';

export const Select = styled.select`
  color: ${({ theme }) => theme.button.text};
  font-size: 0.8rem;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: bold;
  display: block;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.button.border};  
  background: transparent;
  outline:0;
  width: 7vh;
  height: 5vh;
  
  &:hover {
    background-color: ${({ theme }) => theme.button.hover.background};
  }  
`;