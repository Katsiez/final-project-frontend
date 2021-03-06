import React from "react";
import styled from "styled-components";
import { ShopBooksButton } from "lib/ShopBooksButton";

export const HomePage = () => {
  return (
    <>
      <TextSection>
        <Text>Books were always cool.</Text>
        <TextUnder>
          But you knew that already. Looking for your next cozy read? Check out
          our store and choose a book from the finest picks.
        </TextUnder>
        <ShopBooksButton to="/books">Shop all books</ShopBooksButton>
      </TextSection>
      <IntroPage />
      <BlockSection />
    </>
  );
};

//HOME PAGE STYLING
const IntroPage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("${process.env.PUBLIC_URL + "../assets/read.jpg"}");
  min-height: 800px;
  width: 1100px;
  background-size: cover;
  background-position: center center;
  box-shadow: 5px 15px 25px 20px rgba(0, 0, 0, 0.24);
  margin: 20px auto;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 350px;
    height: 700px;
  }
  @media screen and (max-width: 768px) {
    background-image: url("${process.env.PUBLIC_URL + "../assets/green.jpg"}");
    width: 350px;
    height: 700px;
    background-size: cover;
    background-position: center center;
  }
  @media screen and (max-width: 1201px) {
    background-image: url("${process.env.PUBLIC_URL + "../assets/green.jpg"}");
    width: 350px;
    height: 700px;
    background-size: cover;
    background-position: center center;
  }
`;

const TextSection = styled.section`
  padding: 50px 80px;
  @media (max-width: 667px) {
    padding: 20px;
  }
`;
const BlockSection = styled.section`
  background-color: #c3cbc9;
  height: 80vh;
  max-width: 100%;
  margin-top: -600px;
`;

const Text = styled.p`
  font-family: "Lora", serif;
  font-size: 90px;
  font-weight: bolder;
  display: flex;
  width: 80%;
  margin: 20px auto;
  padding-bottom: 30px;
  padding-top: 40px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ##303131;
  @media (max-width: 667px) {
    font-size: 70px;
  }
`;
const TextUnder = styled.p`
  font-family: "Lora", serif;
  font-size: 25px;
  font-weight: lighter;
  line-height: 1.2em;
  display: flex;
  width: 40%;
  color: #222;
  padding-bottom: 30px;
  margin: 15px auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media (max-width: 667px) {
    font-size: 18px;
    width: 70%;
  }
  @media screen and (max-width: 880px) {
    width: 70%;
  }
`;
