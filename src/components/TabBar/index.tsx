import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faComment,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
  category: string;
}

const TabBar: React.FC<Props> = () => {
  return (
    <TabBarContainer>
      <TabBarButton href="/home">
        <FontAwesomeIcon icon={faHome} className="tab-icon" />
      </TabBarButton>

      <TabBarButton href="/schedules">
        <FontAwesomeIcon icon={faCalendar} className="tab-icon" />
      </TabBarButton>

      <TabBarButton href="/chat">
        <FontAwesomeIcon icon={faComment} className="tab-icon" />
      </TabBarButton>

      <TabBarButton href="/profile">
        <FontAwesomeIcon icon={faUser} className="tab-icon" />
      </TabBarButton>
    </TabBarContainer>
  );
};

const TabBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 56px;
`;

const TabBarButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 16px;
  color: #666;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #000;
  }

  &.active {
    color: #007aff;
  }
`;

export default TabBar;
