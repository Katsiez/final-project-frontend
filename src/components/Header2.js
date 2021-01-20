import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SubmitButton } from "components/SubmitButton";

export const Header2 = () => {
  return (
    <Nav>
        <ButtonContainer>
		<Redirect to="/wishlist">
            <SubmitButton title="Wishlist" />
          </Redirect>
          <Redirect to="/login">
            <SubmitButton title="Login"/>
          </Redirect> 
          <Redirect to="/signup">
            <SubmitButton title="Sign Up" />
          </Redirect>
        </ButtonContainer>
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
  justify-content: center;
  width: 100%;
  padding: 0;
  background-color: #cdd7e0;
`;
