import styled from 'styled-components';

export const Switch = styled.div`
  .switch {
    visibility: hidden;
    position: absolute;
    margin-left: -9999px;
  }

  .switch + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  /* Estilo Flat */
  .switch + label {
    padding: 2px;
    width: 60px;
    height: 30px;
    background-color: #dddddd;
    border-radius: 30px;
    transition: background 0.4s;
  }
  .switch + label:before,
  .switch + label:after {
    display: block;
    position: absolute;
    content: "";
  }
  .switch + label:before {
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    background-color: #fff;
    border-radius: 30px;
    transition: background 0.4s;
  }
  .switch + label:after {
    top: 4px;
    left: 4px;
    bottom: 4px;
    width: 24px;
    background-color: #dddddd;
    border-radius: 20px;
    transition: margin 0.4s, background 0.4s;
  }

  .switch:checked + label:after {
    margin-left: 28px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;