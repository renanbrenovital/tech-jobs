import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: ${props => (props.value && 'blue')}

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
  flex-direction: row;
  background: ${({ theme }) => theme.card.background};
`;

export const Content = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;