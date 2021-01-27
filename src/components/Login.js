import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { LSbutton } from "./LSbutton";
import { InputField } from "./InputField";
import { UserProfile } from "./UserProfile";
import { user } from "../reducers/user";
import { Header2 } from "components/Header2";
import { Footer } from "../components/Footer";

import styled from "styled-components";
import { rgba } from "polished";

const LOGIN = "http://localhost:8000/login";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInFailed, setLogInFailed] = useState(false);
  const [logInSuccess, setLogInSuccess] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(LOGIN, {
      method: "POST",
      body: JSON.stringify({
        password,
        email,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not create account. Please try again");
        }
        return res.json();
      })
      .then((json) => {
        dispatch(user.actions.setUserId({ userId: json.id }));
        dispatch(
          user.actions.setAccessToken({ accessToken: json.accessToken })
        );
        setLogInSuccess(true);
      })
      .catch(() => {
        setLogInFailed(true);
      })
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };

  return (
    <>
      <Header2 />
      <Main>
        <div className="back">
          <Link to="/" exact="true">
            HOME
          </Link>
        </div>
        <Text>Hey, reader.</Text>
        {logInSuccess === true ? (
          <UserProfile />
        ) : (
          <Form onSubmit={handleFormSubmit}>
            <InputField
              name="email"
              label="Email"
              type="email"
              value={email}
              placeholder="email"
              onChange={(event) => setEmail(event.target.value)}
              minLength="3"
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
              minLength="6"
            />
            {logInFailed && (
              <span>
                <Text>
                  Failed to log in. Email and/or password incorrect. Please try
                  again.
                </Text>
              </span>
            )}
          </Form>
        )}
        <LSbutton title="Log in" />
        <TextBelow>
          New around here?
          <a class="link" href="/signup">
            Sign up today.
          </a>
        </TextBelow>
        <Footer />
      </Main>
    </>
  );
};

const Main = styled.main`
  background-color: #f2c84b;

  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-height: 30vh;
  margin-bottom: 30px;
  margin: 100px auto;
  align-items: center;
  font-family: "Spectral", serif;
  justify-content: center;
  padding: 5px;
  border-radius: 30px;
  border: 1px solid #b1b0ae;
  -webkit-box-shadow: 2px 6px 15px 3px rgba(0, 0, 0, 0.39);
  box-shadow: 2px 6px 15px 3px rgba(0, 0, 0, 0.39);
  //   background-color: ${rgba("#F2B9B3", 0.4)};
  background-color: #f2b9b3;
  @media (max-width: 950px) {
    margin: 30px auto;
    width: 60%;
    margin-bottom: 10px;
  }
  @media (max-width: 660px) {
    margin: 30px auto;
    width: 60%;
    margin-bottom: 10px;
  }
`;
const Text = styled.text`
  display: flex;
  padding: 10px;
  font-size: 50px;
  flex-direction: column;
  color: #f24e29;
  font-weight: bold;
  font-family: "Spectral", serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 90px;
  margin-bottom: -25px;
  letter-spacing: 2px;
  @media (max-width: 950px) {
    font-size: 17px;
    margin-top: 10px;
  }
  @media (max-width: 660px) {
    font-size: 17px;
    margin-top: 10px;
  }
`;
const TextBelow = styled.text`
  display: flex;
  padding: 10px;
  font-size: 20px;
  flex-direction: column;
  color: #000;
  font-weight: initial;
  font-family: "Spectral", serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 90px;
  margin-bottom: -25px;
  letter-spacing: 2px;
  @media (max-width: 950px) {
    font-size: 17px;
    margin-top: 10px;
  }
  @media (max-width: 660px) {
    font-size: 17px;
    margin-top: 10px;
  }
`;
