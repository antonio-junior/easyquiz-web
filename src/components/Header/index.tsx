import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.png';
import HeaderProfile from './HeaderProfile';
import NavBar from './NavBar';

const HeaderContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  border-bottom: solid 1px #d8d8d9;
`;

const HeaderData = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const LogoContainer = styled.div`
  margin: 5px;
  padding-top: 7px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderData>
        <LogoContainer>
          <img src={logo} height='35px' alt='logo' />
        </LogoContainer>
        <NavBar />
        <HeaderProfile />
      </HeaderData>
    </HeaderContainer>
  );
};

export default Header;
