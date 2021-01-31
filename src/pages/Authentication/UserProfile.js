import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { user, getSecretMessage, logout } from 'reducers/user';

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
    <>
      <h1>Welcome, user</h1>
      <h3>{`${secretMessage}`}</h3>

      <p>text</p>
      <button className="button-primary" type="button" onClick={handleClick}>Log out</button>
    </>
  );
};