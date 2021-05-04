import React from 'react';
import styled from 'styled-components';

const Home: React.FC = () => {
  return <Container>Say hello to Chlngers!</Container>;
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
`;
