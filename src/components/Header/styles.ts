import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  background-color: #fff;
`;

const Logo = styled.img`
  position: static;
  width: 200px;
  margin: 20px;
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
};
