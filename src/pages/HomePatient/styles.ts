import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.h1`
  margin-top: 3rem;
  font-weight: bold;
  font-size: 1rem;
  padding-left: 1.5rem;
`;

const SearchbarWrapper = styled.div`
  display: flex;
  justify-content: left;
`;

const Searchbar = styled.input`
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 1rem;
  border: none;
  width: 80%;
  padding: 0.5rem 1rem;
  margin: 1rem 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export { Container, Title, SearchbarWrapper, Searchbar, Item };
