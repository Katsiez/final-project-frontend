import React from "react";

import { ShopBooksButton } from "lib/ShopBooksButton";
import styled from "styled-components/macro";

export const Checkout = () => {
  return (
    <>
      <HomeSummary>
        <p>Checkout not yet available, may we intrest you in a gif?</p>
        <NotFound
          src="https://media.giphy.com/media/YGlRW1Am9q7e0/giphy.gif"
          alt="library madness"
        />
        <p>
          No? Okay then, have a look at our finest selection of books, again.
        </p>
        <ShopBooksButton to="/books">BROWSE BOOKS</ShopBooksButton>
        <NotFound
          src="https://media.giphy.com/media/iJ2VEARf6y3UFnFZj2/giphy.gif"
          width="365"
          alt="mad librarian"
        />
      </HomeSummary>
    </>
  );
};

const HomeSummary = styled.section`
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const NotFound = styled.img`
  margin: 20px;
  border: 1px solid #222;
`;
