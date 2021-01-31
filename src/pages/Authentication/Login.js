import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user, login } from 'reducers/user';

export const Login = ({ setPage }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((store) => store.user.errorMessage);

  useEffect(() => {
    dispatch(user.actions.setErrorMessage({ errorMessage: null }));
  }, [dispatch]); 

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(name, password));
  };

  return (
    <div className="column">
      <h1>Hey, you.</h1>
      <form onSubmit={handleSubmit}>
        <label>
        <p className="p-label">Name</p>
          <input
            type="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label>
        <p className="p-label">Password</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength= "6"
            required
          />
        </label>
        <button className="button-primary" type="submit">Log in</button>
      </form>
      {error && <div className="div-error">{`${error}`}</div>}
      <hr/>
      <p className="p-label">First time here?</p>
      <button className="button-secondary" type="button" onClick={() => setPage('signup')}>Sign up</button>
    </div>
  );
};