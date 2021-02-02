import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { user, getSecretMessage, logout } from 'reducers/user';
import styled from 'styled-components'
import { Link } from "react-router-dom";

export const UserProfile = ({setPage}) => {
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.user.userId);
  const accessToken = useSelector((store) => store.user.accessToken);
  const secretMessage = useSelector((store) => store.user.secretMessage);

  useEffect(() => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
    dispatch(getSecretMessage(userId, accessToken));
  });
  const handleClick = () => {
    dispatch(logout());
    setPage('signup');
  };

  return (
    <div className="welcome">
      <h3>{`${secretMessage}`}</h3>
      <p>Browse through our finest selection of books</p>
      <AllBooks to="/books">Shop all books</AllBooks>
      <button className="button-primary" type="button" onClick={handleClick}>Log out</button>
    </div>
  );
};


const AllBooks = styled(Link)`
  font-family: "Spectral", serif;
  font-size: 20px;
  line-height: 1.2em;
  display: flex;
  width: 20%;
  height: 7vh;
  color: #222;
  padding: 2px;
  background-color: #bd9478;
  position: relative;
  margin: 30px auto;
  margin-bottom: -10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #bb7b6a;
    color: #010606;
  }
  @media (max-width: 887px) {
    font-size: 20px;
    letter-spacing: 1px;
    width: 70%;
  }
`;
