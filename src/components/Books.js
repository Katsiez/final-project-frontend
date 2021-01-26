import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BOOKS = "http://localhost:8000/books";

export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(BOOKS)
      .then((res) => res.json())
      .then((json) => {
        setBooks(json);
      });
  }, []);

  return (
    <Main>
      <div className="back">
        <Link to="/" exact="true">
          HOME
        </Link>
      </div>
      <Text>Browse our library of pre-loved books.</Text>
      <section className="all-books">
        {books.map((book) => (
          <div className="book-card" key={`book${book._id}`}>
            <Link to={`/books/${book.bookID}`}>
              <p className="book-title">{book.title}</p>
              <p className="book-author">{book.authors}</p>
            </Link>
          </div>
        ))}
      </section>
    </Main>
  );
};

const Main = styled.main`
  background-color: #d0ded8;
  //fix the white space there
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
