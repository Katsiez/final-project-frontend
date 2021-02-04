import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import { FavIcon } from "lib/FavIcon";
import { Button } from "./SingleBook";

const BESTSELLERS = "http://localhost:8000/books/bestseller/bestseller";

export const Bestsellers = () => {
  //const { bestseller } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(BESTSELLERS)
      .then((res) => res.json())
      .then((json) => {
        setBooks(json);
      })
      .catch(() => {
        console.error();
      });
  }, []);

   //Randomize price for all books
   const Random = (props) => {
    const precision = 100; // 2 decimals
    const randomnum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision); 
    return <div>{randomnum}€</div>;
  }

  return (
    <>
      <Text>Browse our bestsellers.</Text>
      <TextUnder>
        <p>
          Choose a book from our current collection,or simply
          <br />
          <a class="books-link" href="/signup">
            sign up
          </a>{" "}
          to get notified when new books arrive!
        </p>
      </TextUnder>
      <section className="all-books">
        {books.map((book) => (
          <div className="book-card-all" key={`book${book._id}`}>
            <Link to={`/books/id/${book.bookID}`}>
              <img
                className="book-image-all"
                src={book.imageUrl}
                alt="book_cover"
              />
            </Link>
            <div className="book-info">
              <Link to={`/books/id/${book.bookID}`}>
                <p className="book-title">{book.title}</p>
                <p className="book-author">{book.authors}</p>
              </Link>
              {/* <FavIcon book={book} /> */}
              <div className="random-num">
                <Random/>
              </div>
            </div>
            <Button>Add to cart</Button>
          </div>
        ))}
      </section>
    </>
  );
};

const Text = styled.title`
  display: flex;
  text-align: center;
  padding: 60px 0 40px;
  font-size: 50px;
  flex-direction: column;
  color: #222;
  font-weight: bold;
  font-family: "Lora", serif;
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
  font-family: "Lora", serif;
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
