import styled from 'styled-components';

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

export { TabBarContainer, TabBarButton };
