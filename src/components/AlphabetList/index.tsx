import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFileMedicalAlt,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import {
  Wrapper,
  LetterSection,
  LetterHeader,
  PatientName,
  PatientContainer,
} from './styles';

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
                  <Link to={`/patient/${patient.id}`}>
                    <FontAwesomeIcon icon={faFileMedicalAlt} />
                    <PatientName>{patient.name}</PatientName>
                  </Link>
                </PatientContainer>
              ))
            : null}
        </LetterSection>
      ))}
    </Wrapper>
  );
};

export default AlphabeticalList;
