import React from 'react';

import {
  Container,
  Header,
  Logo,
  Greeting,
  WelcomeMessage,
  ProfileImage,
  UserInformation,
} from './styles';

import { useAuth } from '../../hooks/auth';
import AlphabeticalList from '../../components/AlphabetList';

import logoImg from '../../assets/logo.png';
import SideMenu from '../../components/sideMenu';
import TabBar from '../../components/TabBar';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Logo" />

        <UserInformation>
          <SideMenu />
          <div>
            <Greeting>Olá, {user.name}!</Greeting>
            <WelcomeMessage>Bem-vindo(a) de volta!</WelcomeMessage>
          </div>
          <ProfileImage src={user.avatar_url} alt={user.name} />
        </UserInformation>
      </Header>
      <AlphabeticalList />
      <TabBar category="/home-pacient" />
    </Container>
  );
};

export default Dashboard;
