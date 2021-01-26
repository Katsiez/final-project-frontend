import React from "react";
import styled from "styled-components";

export const LSbutton = ({ title, onClick, onSubmit }) => {
  return (
    <MainContainer onSubmit={onSubmit} onClick={onClick}>
      <TextField>{title}</TextField>
    </MainContainer>
  );
};

const MainContainer = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 30%;
	background-color: #049DD9;
	border: none;
	margin: -30px auto;
	  &:hover {
		background: #14A647;
		cursor: pointer;
		transition: ease-in-out .3s;
	  }
	  @media (max-width: 950px) {
		width: 70%;
	  }
	  @media (max-width: 660px) {
		width: 70%;
	
`;
const TextField = styled.p`
font-family: "Spectral", serif;
display: flex;
  padding: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #fff;
  &:hover {
    color: #d2c5ab;
  }
`;