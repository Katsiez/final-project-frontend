import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export const SingleBook = () => {
  const { bookID } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/books/book/${bookID}`)
      .then((response) => response.json())
      .then((json) => {
        setBook(json);
      })
      .catch(() => {
        console.error();
      });
  }, [bookID]);

  return (
    <Main>
      <div className="back">
        <Link to="/books" exact="true">
          BACK TO BOOKS
        </Link>
      </div>
      <Text>
        <p className="book-title">{book.title}</p>
      </Text>
      <section className="all-books">
        <div className="book-card" key={`book${book._id}`}>
          <Link to={`/books/${book.bookID}`}>
            <p className="book-author">{book.authors}</p>
            <p className="book-genre">{book.genre}</p>
            <p className="book-synopsis">{book.synopsis}</p>
          </Link>
        </div>
      </section>
    </Main>
  );
};

const Main = styled.main`
  background-color: #d0ded8;
  min-height: 100vh;
`;
const Text = styled.text`
  display: flex;
  padding: 10px;
  font-size: 50px;
  flex-direction: column;
  color: #ff4466;
  font-weight: bold;
  font-family: "Spectral", serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 70px;
  @media (max-width: 950px) {
    font-size: 17px;
    margin-top: 10px;
  }
  @media (max-width: 660px) {
    font-size: 17px;
    margin-top: 10px;
  }
`;
