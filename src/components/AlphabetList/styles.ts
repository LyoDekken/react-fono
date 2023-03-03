import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #ffff;
  padding: 50px 20px;
  height: calc(100vh - 150px); // ou outro valor que você preferir
  overflow-y: auto;
  font-family: Arial, sans-serif;
`;

export const LetterSection = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  position: relative;

  &:before {
    position: absolute;
    left: 0;
    right: 0;
    top: -1px;
    height: 0;
    border-top: 1px solid #4f31a1;
  }
`;

export const LetterHeader = styled.div`
  background-color: #4f31a1;
  color: #ffff; /* Esmeralda clara */
  font-size: 24px;
  font-weight: normal;
  padding: 0 36px;
  border: 1px solid white;
  border-left: none;
  border-right: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PatientContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 18px;
  height: 30px;
  background-color: #ffff;
`;

export const PatientName = styled.span`
  margin-left: 8px;
  margin-right: 8px; // adicionado margem à direita para separar o ícone do nome
`;
