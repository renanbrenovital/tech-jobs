import styled from 'styled-components';

export const Button = styled.button`
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  outline:0;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }  
`;