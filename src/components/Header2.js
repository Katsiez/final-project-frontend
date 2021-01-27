import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SubmitButton } from "components/SubmitButton";

export const Header2 = () => {
  return (
    <>
    <Nav>
        <ButtonContainer>
        <Redirect to="/books">
            <SubmitButton title="All books"/>
          </Redirect> 
          <Redirect to="/books/bestseller">
            <SubmitButton title="Bestsellers"/>
          </Redirect> 
          <Redirect to="/books/new_releases">
            <SubmitButton title="New releases" />
          </Redirect>
          <Redirect to="/about">
            <SubmitButton title="About Bookmark Reads" />
          </Redirect>
        </ButtonContainer>
    </Nav>
    </>
  );
};

const ButtonContainer = styled.div`
padding-right: 10px;
margin-bottom: -5px;
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
  background-color: #e6e9ef;
  box-shadow:  3px 2px 4px #ccc;
`;
