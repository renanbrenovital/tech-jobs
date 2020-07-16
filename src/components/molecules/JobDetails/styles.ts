import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
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
  
  @media(max-width: 900px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > button {
    margin-top: 3vh;
  }

  a {
    color: ${({ theme }) => theme.card.title};
  }

  p.error {
    color: ${({ theme }) => theme.colors.error};
    font-weight: bold;
  }

  p.success {
    color: ${({ theme }) => theme.colors.success};
    font-weight: bold;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1vw;
  margin-top: 3vh;

  > button {
    width: 20%;
  }

  > input {
    width: 40%;
  }

  > input[type="text"], > button {
    text-transform: capitalize;
  }

  > input[type="email"], > button {
    margin-left: 1vw;
  }

  @media(max-width: 600px) {
    flex-direction: column;

    > button, > input {
      width: 100%;
    }

    > input[type="email"], > button {
      margin-left: 0;
      margin-top: 1vh;
    }
  }

`;