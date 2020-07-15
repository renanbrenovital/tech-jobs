import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};

  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.5s;
    visibility: visible;
  }

  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.5s;
    visibility: hidden;
  }

  > button {
    position: absolute;
    top: 5vw;
    right: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3vw;
    height: 3vw;
  }
`;