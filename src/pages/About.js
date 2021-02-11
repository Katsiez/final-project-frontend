import React from "react";
import styled from "styled-components";

export const About = () => {
  return (
    <>
      <AboutSection>
        <Picture src="../assets/ok.jpg" alt="Girl with book"></Picture>
        <h3>
          Hello there!{" "}
          <span role="img" aria-label="wave emoji">
            👋🏼
          </span>
        </h3>
        <MainText>
          Bookmark Reads is an independent, second-hand online bookshop for
          previously loved books. We take pride in hand-picking the finest
          authors and their works, and you can always count that the condition
          of our books is impeccable. Due to the fact that there is only one
          single copy of each book offered, we make sure that we keep our
          inventory fresh and we update continuously. We offer a wide-range of
          amazing reads, and even newer bestsellers! Check out our selection{" "}
          <a className="books-link" href="/books">
            here.
          </a>{" "}
        </MainText>
        <MainText>
          Feel free to have a look around, maybe you'll get lucky and find your
          next sweet read for a great value.
        </MainText>
        <br />
        <MainText>
          Having a hard time choosing your next read? Check out our fine
          selection of some of the most popular fiction{" "}
          <a className="books-link" href="/books">
            here.
          </a>{" "}
        </MainText>
        <BookGif
          src="https://media.giphy.com/media/lK5xYqtHY9yd3p0RXe/giphy.gif"
          width="365"
          alt="books mix"
        />
        <hr />
        <div>
          <Logo src="../assets/logo.svg" alt="Logo"></Logo>
        </div>
      </AboutSection>
    </>
  );
};

const AboutSection = styled.section`
  margin: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 667px) {
    margin: 50px 100px;
  }
  @media (min-width: 1024px) {
    margin: 50px 200px;
  }
`;

const Picture = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20%;
  margin-bottom: 20px;
  background-size: cover;

  background-position: center center;

  @media (min-width: 1024px) {
    width: 300px;
    height: 300px;
  }
`;
const Logo = styled.img`
  border-radius: 10%;
  display: block;
  min-width: 300px;
  align-items: center;
  @media (min-width: 1024px) {
    width: 300px;
  }
`;
const MainText = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  color: black;
`;

export const BookGif = styled.img`
  margin: 20px;
  border: 1px solid #222;
`;
