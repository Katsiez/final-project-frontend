import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SubmitButton } from "components/SubmitButton";
import {Header2} from "components/Header2"

export const Header = () => {
  return (
    <Nav>
        <ButtonContainer>
		<Redirect to="/wishlist">
		<User src="../assets/wishlist.png" alt="logo"></User>
            <SubmitButton title="Wishlist" />
          </Redirect>
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

  );
};

const ButtonContainer = styled.div`
padding-right: 10px;
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
  padding: 0;
  background-color: #c5e1ec;
`;

const User = styled.img`
  position: relative;
  width: 16px;
`;
