import React from 'react';
import styled from 'styled-components';

import logo from '../assets/easypoll.png';
import GithubButton from '../components/GithubButton';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainBox = styled.div`
  width: 30%;
  height: 30%;
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 11px 1px rgba(142, 142, 142, 0.76);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Login = () => {
  return (
    <Wrapper>
      <MainBox>
        <img src={logo} alt='logo' height='100px' />
        <GithubButton />
      </MainBox>
    </Wrapper>
  );
};

export default Login;
