import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  position: static;
  width: 200px;
  left: calc(50% - 200px / 2);
  top: calc(50% - 37.76px / 2 - 411.12px);
`;

const UserInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Greeting = styled.h2`
  font-size: 18px;
  font-weight: normal;
  margin: 0;
`;

const WelcomeMessage = styled.span`
  font-size: 14px;
  color: #999;
`;

const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 16px;
  margin-left: auto;
`;

export {
  Header,
  Logo,
  UserInformation,
  Greeting,
  WelcomeMessage,
  ProfileImage,
  Container,
};
