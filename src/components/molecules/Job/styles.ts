import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  width: 220px;

  @media(max-width: 600px) {
    width: 80vw;
    margin: 3vh 0;
  }

  active {
    background-color: 'red';
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px ${({ theme }) => theme.card.shadow};
  overflow: hidden;
  margin-bottom: 3vw;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card.background};
  transition: all .2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;