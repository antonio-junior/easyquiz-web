import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  text-align: right;
  padding-right: 13px;
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const CreateButton = styled.button`
  background-color: #2cb2a9;
  color: #fff;
  width: 140px;
  height: 34px;
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #37bbb2;
  }
`;

const BellIcon = styled.span`
  font-size: 23px;
  background-color: #fff;
  padding: 2px;
  border-radius: 18px;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <CreateButton>Create Poll</CreateButton>
      <BellIcon>
        <i className='las la-bell' />
      </BellIcon>
    </NavContainer>
  );
};

export default NavBar;
