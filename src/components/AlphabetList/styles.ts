import styled from 'styled-components';

export const AlphabeticalListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AlphabeticalSection = styled.div`
  width: 200px;
  margin-right: 20px;
`;

export const PatientItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const PatientIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: #ccc;
`;

export const NoPatients = styled.div`
  color: #999;
  font-style: italic;
  margin-top: 10px;
`;
