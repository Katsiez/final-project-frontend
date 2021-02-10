import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FavIcon } from "lib/FavIcon";

import { StarRating } from "components/StarRating";
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
  ButtonSingle,
} from "lib/BookStyling";

import { RandomNumber, RandomPrice } from "helpers/RandomPrice";

const BOOKS = "http://localhost:8000/books";

export const AllBooks = () => {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(BOOKS)
      .then((res) => res.json())
      .then((json) => {
        setBooks(json);
      });
  }, []);

  return (
    <>
      <Text>Browse current favourite reads.</Text>
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
          <BookCardAll key={`book${book._id}`}>
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
              <p>
                <StarRating />
              </p>
              <FavIcon book={book} />
              <RandomNumber>
                <RandomPrice />
              </RandomNumber>
              <ButtonSingle
                onClick={() => {
                  dispatch(cart.actions.addItem(book));
                }}
              >
                Add to cart
              </ButtonSingle>
            </BookInfo>
          </BookCardAll>
        ))}
      </AllBooksInfo>
    </>
  );
};
