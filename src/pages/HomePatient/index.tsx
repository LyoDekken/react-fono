import { IonItem } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import TabBar from '../../components/TabBar';
import PageHeader from '../../components/Header';
import QuickAccess from '../../components/Patient/QuickAcess/QuickAccess';

import { Container, Title, SearchbarWrapper, Searchbar } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const HomePatient: React.FC<Props> = () => {
  const history = useHistory();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const router = () => {
    history.replace('/patient');
  };

  return (
    <Container>
      <PageHeader />
      <Title>Encontre seu Paciente</Title>
      <SearchbarWrapper>
        <Searchbar
          color="light"
          placeholder="Pesquise por laudo clínico ou nome"
          onClick={router}
        />
      </SearchbarWrapper>

      <IonItem className="mt-0 mb-0 px-0" lines="none">
        <QuickAccess />
      </IonItem>

      <TabBar category="/home" />
    </Container>
  );
};

export default HomePatient;
