/* eslint-disable import/no-unresolved */
import React from 'react';

import {
  Header,
  Logo,
  Greeting,
  WelcomeMessage,
  ProfileImage,
  UserInformation,
} from './styles';

import { useAuth } from '../../hooks/auth';

import SideMenu from '../sideMenu';

const PageHeader: React.FC = () => {
  const { user } = useAuth();

  return (
    <Header>
      <Logo
        src="https://virtumed.org/wp-content/uploads/2020/04/VirtumedSA.png"
        alt="Logo"
      />

      <UserInformation>
        <SideMenu />
        <div>
          <Greeting>Olá, {user.name}!</Greeting>
          <WelcomeMessage>Bem-vindo(a) de volta!</WelcomeMessage>
        </div>
        <ProfileImage src={user.avatar_url} alt={user.name} />
      </UserInformation>
    </Header>
  );
};

export default PageHeader;
