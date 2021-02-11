import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Text,
  TextUnder,
  Subtext,
  AllBooksInfo,
  BookCard,
  BookInfo
} from "lib/BookStyling";

const BOOKS = "https://final-project-backend-katsiez.herokuapp.com/books/fiction";

export const Fiction = () => {
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
      <Text>FICTION</Text>
      <TextUnder>
        <Subtext>
          Welcome to our most extensive collection, fiction! Here you'll find some of the coollest releases,<br/>
		  all in pristine condition. Have a looksie!
        </Subtext>
      </TextUnder>
      <AllBooksInfo>
        {books.map((book) => (
          <BookCard key={`book${book._id}`}>
            <Link to={`/books/id/${book.bookID}`}>
              <img
                className="book-image-all"
                src={book.imageUrl}
                alt="book_cover"
              />
            </Link>
            <BookInfo>
              <Link to={`/books/id/${book.bookID}`}>
              </Link>
            </BookInfo>
          </BookCard>
        ))}
      </AllBooksInfo>
    </>
  );
};
