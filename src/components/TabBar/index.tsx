import React from 'react';
import styled from 'styled-components';

import {
  HomeOutlined,
  ClearOutlined,
  ChatOutlined,
  PersonOutlined,
} from '@material-ui/icons';

interface Props {
  category: string;
}

const StyledTabBar = styled.div`
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .icon {
    color: #8a2be2;
    font-size: 30px;
  }

  .active {
    color: #8a2be2;
  }
`;

const StyledTabButton = styled.a<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ active }) => (active ? '#9c27b0' : '#757575')};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #9c27b0;
  }
`;

const IconWrapper = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#9c27b0' : '#f5f5f5')};
  margin-bottom: 4px;
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const TabBar: React.FC<Props> = ({ category }) => {
  return (
    <StyledTabBar>
      <StyledTabButton
        href={category === '/home-pacient' ? '/schedules' : '/home'}
        active={category === '/home-pacient' || category === '/home'}
      >
        <IconWrapper
          active={category === '/home-pacient' || category === '/home'}
        >
          <HomeOutlined fontSize="small" />
        </IconWrapper>
        <Label>Home</Label>
      </StyledTabButton>

      {category === '/home-pacient' && (
        <StyledTabButton href="/schedules" active={category === '/schedules'}>
          <IconWrapper active={category === '/schedules'}>
            <ClearOutlined fontSize="small" />
          </IconWrapper>
          <Label>Agenda</Label>
        </StyledTabButton>
      )}

      {category === '/home-doctor' && (
        <StyledTabButton
          href="/schedule-doctor"
          active={category === '/schedule-doctor'}
        >
          <IconWrapper active={category === '/schedule-doctor'}>
            <ClearOutlined fontSize="small" />
          </IconWrapper>
          <Label>Agenda</Label>
        </StyledTabButton>
      )}

      {!(category === '/home-clinic' || category === '/home-admin') && (
        <StyledTabButton href="/chat" active={category === '/chat'}>
          <IconWrapper active={category === '/chat'}>
            <ChatOutlined fontSize="small" />
          </IconWrapper>
          <Label>Chat</Label>
        </StyledTabButton>
      )}

      <StyledTabButton>
        <IconWrapper active={false}>
          <PersonOutlined fontSize="small" style={{ color: '#9c27b0' }} />
        </IconWrapper>
        <Label>Menu</Label>
      </StyledTabButton>
    </StyledTabBar>
  );
};

export default TabBar;
