import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export const HomePage = () => {
  return (
    <>
      <Header />
      {/* <Video autoPlay playsInline muted loop> 
        <source src="../assets/books.mp4" type="video/mp4"></source> 
     </Video> */}
      <Section>
        <Text>Books were always cool.</Text>
        <TextUnder>
          But you knew that already. Looking for your next cozy read? Check out
          our store and choose a book from the finest picks.
        </TextUnder>
      </Section>

      <IntroPage>
        <AllBooks to="/books">Shop all books</AllBooks>
      </IntroPage>
      <Section2 />
    </>
  );
};

const IntroPage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("${process.env.PUBLIC_URL + "../assets/read.jpg"}");
  min-height: 1000px;
  width: 1500px;
  background-size: cover;
  background-position: center center;
  box-shadow: 5px 15px 25px 20px rgba(0, 0, 0, 0.24);
  margin: 150px auto;
  position: relative;
  @media (max-width: 667px) {
    background-image: url("${process.env.PUBLIC_URL + "../assets/green.jpg"}");
    width: 350px;
    min-height: 700px;
    background-size: cover;
    background-position: center center;
  }
`;

const AllBooks = styled(Link)`
  position: relative;
  display: flex;
  border: 1px solid black;
  height: 20px;
  width: 20%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Spectral", serif;
  font-size: 20px;
  padding: 20px;
  background: #736926;
  text-decoration: none;
  z-index: 20;
  color: black;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: ease-in-out 0.3s;
    background: #8b4b30;
  }
  @media (max-width: 667px) {
    background: #736926;
    height: 20px;
    width: 80%;
  }
  
`;

const Section = styled.section`
  padding: 80px;
  @media (max-width: 667px) {
    padding: 20px;
  }
`;
const Section2 = styled.section`
  background-color: #c3cbc9;
  min-height: 80vh;
  max-width: 100%;
  margin-top: -1000px;
`;

const Text = styled.p`
  font-family: "Spectral", serif;
  font-size: 90px;
  font-weight: bolder;
  display: flex;
  width: 80%;
  margin: 20px auto;
  padding-bottom: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ##303131;
  @media (max-width: 667px) {
    font-size: 30px;
  }
`;
const TextUnder = styled.p`
  font-family: "Spectral", serif;
  font-size: 25px;
  font-weight: lighter;
  line-height: 1.2em;
  display: flex;
  width: 40%;
  color: #222;
  margin: 15px auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media (max-width: 667px) {
    font-size: 15px;
    width: 70%;
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
