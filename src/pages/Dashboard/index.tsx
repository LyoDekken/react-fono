/* eslint-disable import/no-unresolved */
import React from 'react';

import { Container } from './styles';

import AlphabeticalList from '../../components/AlphabetList';

import TabBar from '../../components/TabBar';
import PageHeader from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <PageHeader />
      <AlphabeticalList />
      <TabBar category="/home" />
    </Container>
  );
};

export default Dashboard;
