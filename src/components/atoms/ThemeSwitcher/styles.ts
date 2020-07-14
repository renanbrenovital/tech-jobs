import styled from 'styled-components';

export const Input = styled.input`
  visibility: hidden;
  position: absolute;
  margin-left: -9999px;

  :checked + label:after {
    margin-left: 28px;
  }
`;

export const Label = styled.label`  
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
  padding: 2px;
  width: 60px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.title};
  border-radius: 30px;
  transition: background 0.4s;
  
  :before, :after {
    display: block;
    position: absolute;
    content: "";
  }

  :before {
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 30px;
    transition: background 0.4s;
  }

  :after {
    top: 4px;
    left: 4px;
    bottom: 4px;
    width: 24px;
    background-color: ${({ theme }) => theme.colors.title};
    border-radius: 20px;
    transition: margin 0.4s, background 0.4s;
  }
`;