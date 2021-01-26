import React from "react";
import styled from "styled-components";

export const SubmitButton = ({ title, onClick, onSubmit }) => {
  return (
    <MainContainer onSubmit={onSubmit} onClick={onClick}>
      <TextField>{title}</TextField>
    </MainContainer>
  );
};

const MainContainer = styled.button`
  display: inline-block;
  flex-direction: row;
  flex-wrap: wrap;
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
	transition: ease-in-out 0.3s;
  }
`;
const TextField = styled.p`
  font-family: "Spectral", serif;
  display: flex;
  flex-direction: flex-start;
  font-size: 13px;
  margin: 10px;
  color: #000;
  &:hover {
	color: #F23C13;
	transition: ease-in-out 0.4s; 
	margin: 0.7em;
}
`;
