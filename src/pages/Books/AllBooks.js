import { Footer } from "components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../../components/Navbar/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";

const BOOKS = "http://localhost:8000/books";

export const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    fetch(BOOKS)
      .then((res) => res.json())
      .then((json) => {
        setBooks(json);
      });
  }, []);

  return (
    <>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
    <Main>
      <Text>Browse current favourite reads.</Text>
      <TextUnder><p>Choose a book from our current collection,or simply<br/><a class="books-link" href="/signup">sign up</a> to get notified when new books arrive!</p>
          </TextUnder>
      <section className="all-books">
        {books.map((book) => (
          <div className="book-card" key={`book${book._id}`}>
                {/* <img className="book-image" src={book.imageUrl} alt="book_cover"/> */}
            <Link to={`/books/id/${book.bookID}`}>
            <p className="book-title">{book.title}</p>
              <p className="book-author">{book.authors}</p>
            </Link>
          </div>
        ))}
      </section>
    </Main>
    <Footer/>
    </>
  );
};

const Main = styled.section`
  background-color: #bec4bf;
  //fix the white space there
`;
const Text = styled.title`
  display: flex;
  text-align: center;
    padding: 60px 0 40px;
  font-size: 50px;
  flex-direction: column;
  color: #222;
  font-weight: bold;
  font-family: "Spectral", serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  @media (max-width: 950px) {
    font-size: 30px;
    margin-top: 10px;
  }
  @media (max-width: 660px) {
    font-size: 30px;
    margin-top: 10px;
  }
`;
const TextUnder = styled.title`
  display: flex;
  text-align: center;
  font-size: 20px;
  flex-direction: column;
  margin-bottom: 20px;
  line-height: 2rem;
  color: #222;
  font-family: "Spectral", serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 950px) {
    font-size: 18px;
    margin-top: 10px;
  }
  @media (max-width: 660px) {
    font-size: 18px;
    margin-top: 10px;
  }
`;