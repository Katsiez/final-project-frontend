import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { user, getSecretMessage, logout } from 'reducers/user';
import { ShopBooksButton } from 'lib/ShopBooksButton';

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
      <ShopBooksButton to="/books">Shop all books</ShopBooksButton>
      <button className="button-primary" type="button" onClick={handleClick}>Log out</button>
    </div>
  );
};

