import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import signInBackgroundImg from '../../assets/file.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 65px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #009f8b;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }
    }
  }

  > a {
    color: #009f8b;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.3s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: contain;
`;

export const LoginButtons = styled.div`
  display: flex;
  flex-direction: column; /* altera a direção dos itens para coluna */
  justify-content: center; /* centraliza os itens verticalmente */
  margin-top: 16px;

  button {
    background-color: #3b5998; /* cor de fundo do Facebook */
    color: #fff; /* cor do texto do Facebook */
    border: none;
    border-radius: 4px;
    font-size: 16px;
    padding: 8px 16px;
    margin-bottom: 16px; /* espaçamento entre os botões */
  }
`;
