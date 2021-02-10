import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cart } from "reducers/cart";

import {
  Text,
  TextUnder,
  Subtext,
  AllBooksInfo,
  BookCardAll,
  BookInfo,
  BookTitle,
  BookAuthor,
  ButtonSingle
} from "lib/BookStyling";

import { RandomNumber, RandomPrice } from "helpers/RandomPrice";

const BESTSELLERS = "http://localhost:8000/books/bestseller/bestseller";

export const Bestsellers = () => {
  //const { bestseller } = useParams();
  const dispatch = useDispatch();
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

  return (
    <>
      <Text>Browse our bestsellers.</Text>
      <TextUnder>
        <Subtext>
          Choose a book from our current collection,or simply
          <br />
          <a className="books-link" href="/signup">
            sign up
          </a>{" "}
          to get notified when new books arrive!
        </Subtext>
      </TextUnder>
      <AllBooksInfo>
        {books.map((book) => (
          <BookCardAll key={`book${book.bookID}`}>
            <Link to={`/books/id/${book.bookID}`}>
              <img
                className="book-image-all"
                src={book.imageUrl}
                alt="book_cover"
              />
            </Link>
            <BookInfo>
              <Link to={`/books/id/${book.bookID}`}>
                <BookTitle>{book.title}</BookTitle>
                <BookAuthor>{book.authors}</BookAuthor>
              </Link>
              <RandomNumber>
                <RandomPrice />
              </RandomNumber>
            </BookInfo>
            <ButtonSingle
              onClick={() => {
                dispatch(cart.actions.addItem(book));
              }}
            >
              Add to cart
            </ButtonSingle>
          </BookCardAll>
        ))}
      </AllBooksInfo>
    </>
  );
};
