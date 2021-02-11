import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { user } from 'reducers/user';

export const SignUp = ({ setPage }) => {
  const SIGNUP = 'https://final-project-backend-katsiez.herokuapp.com/signup';

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((store) => store.user.errorMessage);

  useEffect(() => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(SIGNUP, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, password: password })
    })
      .then((res) => {
        if (!res.ok) {
          //Why does it throw this error automatically when I try to create an account
          throw new Error('Could not create account.');
        }
        return res.json();
      })
      .then((json) => {
        dispatch(user.actions.setUserId({ userId: json.userId }));
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }));
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
      });
  };

  return (
    <div className="column">
      <h1>Welcome, reader.</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p className="p-label">Username</p>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            minLength="3"
            maxLength="20"
            required
          />
        </label>
        <label>
          <p className="p-label">Password</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength="5"
            required
          />
        </label>
        <button className="button-primary" type="submit">Create account</button>
      </form>
      {error && <div className="div-error">{`${error}`}</div>}
      <hr />
      <p className="p-label">Already a user?</p>
      <button className="button-secondary" type="button" onClick={() => setPage('login')}>Log in</button>
    </div>
  );
};