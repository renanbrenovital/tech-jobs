import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  margin: 0;
  width: 90%;
  padding: 3vw 3vw 5vw 3vw;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
  overflow-x: hidden;

  > li {
    margin-left: 3vw;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Pagination = styled.div`
  position: fixed;
  bottom: 10vh;
  left: 0;
  background: ${({ theme }) => theme.pagination.background};
  width: 100vw;
  padding: 0.5vw 5vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Options = styled.div`
  max-width: 50vw;
  display: none;
  flex-direction: row;
  align-items: center;

  @media(max-width: 600px) {
    display: flex;
  }
`;

export const Setting = styled.div`
  max-width: 50vw;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1vw;
    height: 1vw;
    margin-right: 1vw;
  }

  > button.active {
    background-color: ${({ theme }) => theme.button.hover.background};
  }

  @media(max-width: 600px) {
    display: none;
  }
`;

