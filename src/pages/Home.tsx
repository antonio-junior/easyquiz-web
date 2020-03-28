import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import PollList from '../components/PollList';

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 15px;
`;

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <PollList />
      </HomeContainer>
    </>
  );
};

export default Home;
