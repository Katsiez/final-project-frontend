import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export const HomePage = () => {
  return (
    <>
      <Header />
      {/* <Video autoPlay playsInline muted loop> */}
        {/* <source src="../assets/books.mp4" type="video/mp4"></source> */}
      {/* </Video> */}
      <IntroPage>
        <AllBooks to="/books">Shop all books</AllBooks>
      </IntroPage>
    </>
  );
};

const IntroPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #F2B9B3;
  min-height: 50vh;
  width: 40%;
  margin: 150px auto;
  background-size: cover;
  background-position: center;
  @media (min-width: 280px) & (max-width: 767px) {
    background: #dbc8fd;
    position: absolute;
    overflow: hidden;
    object-fit: cover;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
  }
`;

const AllBooks = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 20px;
  width: 20%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Spectral", serif;
  font-size: 20px;
  padding: 20px 20px;
  background: #14A647;
  text-decoration: none;
  color: black;
  margin: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: ease-in-out 0.3s;
    background: #f23c13;
  }
  @media (max-width: 667px) {
	width: 200px;
	font-size: 17px;
  }
`;

// export const Video = styled.video`
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   overflow: hidden;
//   object-fit: cover;
//   width: 100%;
//   height: 100vh;
//   z-index: -1;
//   @media (max-width: 667px) {
//     display:none;
//   }
// `;
