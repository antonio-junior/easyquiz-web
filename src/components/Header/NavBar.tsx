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
  font-family: 'Changa', sans-serif;
  background-color: #2cb2a9;
  color: #fff;
  width: 140px;
  height: 34px;
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
  border-radius: 100px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #37bbb2;
  }
`;

interface BellIcon {
  notification?: boolean;
}

const BellIcon = styled.span`
  font-size: 26px;
  background-color: #fff;
  padding: 2px;
  border-radius: 18px;
  cursor: pointer;
  transition: background-color 0.5s;
  position: relative;

  span {
    visibility: ${(props: BellIcon) => !props.notification && 'hidden'};
    position: absolute;
    width: 11px;
    border-radius: 200px;
    background-color: #f63902;
    top: -3px;
    right: -2px;
    height: 13px;
    color: white;
    font-size: 11px;
    padding-right: 4px;
    font-weight: 700;
    padding-top: 2px;
    border: solid 2px white;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <CreateButton>Create Poll</CreateButton>
      <BellIcon notification>
        <span>1</span>
        <i className='las la-bell' />
      </BellIcon>
    </NavContainer>
  );
};

export default NavBar;
