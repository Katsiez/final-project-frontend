import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import { HomeNav } from "../components/HomeNav";

export const HomePage = () => {
  return (
    <IntroPage>
      <Video autoPlay playsInline muted loop>
        <source src="../assets/books.mp4" type="video/mp4"></source>
      </Video>
      <Logo src="../assets/logo1.png" alt="logo"></Logo>
      <ToStore to="/store">Shop books</ToStore>
    </IntroPage>
  );
};

const IntroPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #dbc8fd;
  height: 100vh;
  background-size: cover;
  background-position: center;
  @media (min-width: 667px) {
    background-image: none;
  }
`;

const Logo = styled.img`
  position: relative;
  margin-top: 50px;
  width: 300px;
  @media (min-width: 667px) {
    width: 400px;
  }
  @media (min-width: 1024px) {
    width: 600px;
  }
`;

const ToStore = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 30px;
  width: 20%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Spectral", serif;
  font-size: 20px;
  padding: 20px 20px;
  background: #f27457;
  text-decoration: none;
  color: black;
  margin: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: ease-in-out 0.3s;
    background: #f23c13;
  }
`;

export const Video = styled.video`
  position: absolute;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: none;
  @media (min-width: 667px) {
    display: block;
  }
`;
