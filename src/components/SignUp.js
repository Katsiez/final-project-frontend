import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { user } from "../reducers/user";

import { LSbutton } from "./LSbutton";
import { InputField } from "./InputField";

import styled from "styled-components";
import { rgba } from "polished";
import { UserProfile } from "./UserProfile";
import { Header2 } from "components/Header2";
import { Footer } from "../components/Footer";

const SIGNUP = "http://localhost:8000/signup";

export const SignUp = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpFailed, setSignUpFailed] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(SIGNUP, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
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
        setSignUpSuccess(true);
      })
      .catch(() => {
        setSignUpFailed(true);
      })
      .finally(() => {
        setFirstName("");
        setLastName("");
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
        <Text>Welcome, reader.</Text>
        <TextUnder>
          We are happy to have you join us.
          <br />
          Sign-up and start shopping for some of the finest used books.
        </TextUnder>
        <Form onSubmit={handleFormSubmit}>
          <div class="first-last">
            <InputField
              name="firstName"
              label="firstName"
              type="firstName"
              value={firstName}
              placeholder="first name"
              onChange={(event) => setFirstName(event.target.value)}
              minLength="5"
            />
            <InputField
              name="lastName"
              label="lastName"
              type="lastName"
              value={lastName}
              placeholder="last name"
              onChange={(event) => setLastName(event.target.value)}
              minLength="5"
            />
          </div>
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
          {signUpSuccess && <UserProfile />}
          {signUpFailed && (
            <span>
              <Text>
                Failed to sign up. Please ensure that all fields have been
                filled out and try again.
              </Text>
            </span>
          )}
        </Form>
        <LSbutton title="Sign up" />
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
  min-height: 35vh;
  margin-bottom: 30px;
  margin: 80px auto;
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

const TextUnder = styled.text`
  display: flex;
  padding: 9px;
  font-size: 20px;
  flex-direction: column;
  color: #000;
  font-style: italic;
  font-weight: 400;
  font-family: "Spectral", serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  margin-bottom: -20px;
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
