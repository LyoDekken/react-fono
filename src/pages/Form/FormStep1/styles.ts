import styled from 'styled-components';
import Tooltip from '../../../components/Tooltip';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const StepTitle = styled.p`
  font-size: 13px;
  color: #b8b8d4;
`;

export const StepHeading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 26px;
`;

export const Divider = styled.hr`
  height: 1px;
  border: 0;
  background-color: #16195c;
  margin: 30px 0;
`;

export const NameLabel = styled.label`
  font-size: 13px;

  input {
    display: block;
    margin-top: 7px;
    box-sizing: border-box;
    width: 100%;
    padding: 20px 10px;
    border: 2px solid #25cd89;
    border-radius: 10px;
    color: #fff;
    outline: 0;
    font-size: 15px;
    background-color: #02044a;
  }
`;

export const NextButton = styled.button`
  background-color: #25cd89;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 20px 40px;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 30px;
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #f4ede8;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
