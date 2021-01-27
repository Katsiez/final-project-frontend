import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SubmitButton } from "components/SubmitButton";
import {Header2} from "components/Header2"

export const Header = () => {
  return (
    <>
    <Nav>
        <ButtonContainer>
          <Redirect to="/login">
		  <User src="../assets/user.png" alt="logo"></User>
            <SubmitButton title="Login"/>
          </Redirect>
          <Redirect to="/signup">
            <SubmitButton title="Sign Up" />
          </Redirect>
        </ButtonContainer>
		<Header2/>
    </Nav>
    <Logo src="../assets/logo.svg" alt="logo"></Logo>
</>
  );
};

const ButtonContainer = styled.div`
padding-right: 10px;
margin-top: 10px;
margin-bottom: -10px;
  @media (max-width: 660px) {
    align-self: center;
    margin: 5px;
  }
`;
const Redirect = styled(Link)`
  text-decoration: none;
`;

const Nav = styled.main`
  display: flex;
  float: left;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
  padding: 0;
  background-color: #38392b;
`;

const Logo = styled.img`
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 0;
  bottom: 0;

  @media (max-width: 667px) {
    width: 250px;
  }
  @media (min-width: 1024px) {
    width: 360px;
  }
`;
const User = styled.image`
  width: 50px;
`