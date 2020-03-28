import React from 'react';
import styled from 'styled-components';

const UserAccount = styled.div`
  width: 150px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  display: flex;
`;

const UserInfo = styled.div`
  width: 100%;
  padding: 13px 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    -ms-border-radius: 100px;
    -o-border-radius: 100px;
    border-radius: 100px;
    border: 3px solid #e6e7e8;
    max-width: 30px;
  }

  a {
    color: #000;
    font-size: 14px;
    text-decoration: none;
  }
`;

const HeaderProfile = () => {
  return (
    <UserAccount>
      <UserInfo>
        <img alt='profile' src='https://randomuser.me/api/portraits/men/62.jpg' />
        <a href='/'>John Doe</a>
      </UserInfo>
    </UserAccount>
  );
};

export default HeaderProfile;
