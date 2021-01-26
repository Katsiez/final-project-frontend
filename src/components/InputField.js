import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

export const InputField = ({
  placeholder,
  type,
  value,
  onChange,
  minLength,
}) => {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      minLength={minLength}
      required
    />
  );
};
const Input = styled.input`
  border-bottom: 5px solid #14A647;
  border-top: none;
  border-left: none;
  border-right: none;
  text-decoration: none;
  border-radius: 15px;
  background-color: ${rgba("#fff", 0.3)};
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  width: 70%;
  padding: 10px;
  font-family: "Spectral", serif;
  margin: 20px;
  @media (max-width: 950px) {
    margin: 10px;
    font-size: 16px;
  }
  @media (max-width: 660px) {
    margin: 10px;
    font-size: 16px;
  }
`;
