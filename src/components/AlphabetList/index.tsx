import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileMedicalAlt,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

interface Patient {
  id: string;
  name: string;
}

const AlphabeticalList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '');
    const token = localStorage.getItem('token');

    const headers = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    axios
      .get<Patient[]>(`http://localhost:3333/patient/all/${user.id}`, headers)
      .then(response => {
        const initialPatients = response.data.map(patient => ({
          ...patient,
        }));
        // inicialize a propriedade expanded como false
        setPatients(initialPatients);
      });
  }, [alphabet]);

  const sections = patients.reduce(
    (acc: { [key: string]: Patient[] }, patient: Patient) => {
      const sectionKey = patient.name.charAt(0).toUpperCase();
      const section = acc[sectionKey] || [];
      return { ...acc, [sectionKey]: [...section, patient] };
    },
    {},
  );

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleSection = (letter: string) => {
    setExpandedSections({
      ...expandedSections,
      [letter]: !expandedSections[letter],
    });
  };

  return (
    <Wrapper>
      {alphabet.map(letter => (
        <LetterSection key={letter}>
          <LetterHeader onClick={() => toggleSection(letter)}>
            {letter}
            <FontAwesomeIcon
              icon={expandedSections[letter] ? faChevronUp : faChevronDown}
            />
          </LetterHeader>
          {expandedSections[letter]
            ? sections[letter] &&
              sections[letter].map(patient => (
                <PatientContainer key={patient.id}>
                  <FontAwesomeIcon icon={faFileMedicalAlt} />
                  <PatientName>{patient.name}</PatientName>
                </PatientContainer>
              ))
            : null}
        </LetterSection>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffff;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const LetterSection = styled.div`
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

const LetterHeader = styled.div`
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

const PatientContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 18px;
  height: 30px;
  background-color: #ffff;
`;

const PatientName = styled.span`
  margin-left: 8px;
  margin-right: 8px; // adicionado margem à direita para separar o ícone do nome
`;

export default AlphabeticalList;
