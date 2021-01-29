import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "components/Sidebar/Sidebar";
import { Banner } from "components/Banner";
import { Footer } from "components/Footer/Footer";

export const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {/* <Video autoPlay playsInline muted loop> 
        <source src="../assets/books.mp4" type="video/mp4"></source> 
     </Video> */}
     <Banner/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <TextSection>
        <Text>Books were always cool.</Text>
        <TextUnder>
          But you knew that already. Looking for your next cozy read? Check out
          our store and choose a book from the finest picks.
        </TextUnder>
        <AllBooks to="/books">Shop all books</AllBooks>
      </TextSection>
      <IntroPage/>
      <BlockSection />
      <Footer/>
    </>
  );
};

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
  @media screen and (max-width: 768px) {
    background-image: url("${process.env.PUBLIC_URL + "../assets/green.jpg"}");
    width: 350px;
    min-height: 700px;
    background-size: cover;
    background-position: center center;
  }
  @media screen and (max-width: 1201px) {
    width: 1000px;
    min-height: 900px;
    background-size: cover;
    background-position: center center;
  }
`;

const AllBooks = styled(Link)`
font-family: "Spectral", serif;
font-size: 20px;
font-weight: lighter;
line-height: 1.2em;
display: flex;
width: 15%;
height: 5vh;
color: #222;
padding: 2px;
background-color:#bd9478;
position: relative;
margin: 30px auto;
margin-bottom: -10px;
text-align: center;
align-items: center;
justify-content: center;
&:hover {
	transition: all 0.3s ease-in-out;
	background: #bb7b6a;
	color: #010606;
}
@media (max-width: 667px) {
  font-size: 15px;
  width: 70%;
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
  padding-bottom: 20px;
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
