import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cart } from "reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "lib/Spinner";

import {
  Left,
  Right,
  Main,
  TextList,
  Card,
  Content,
  Container,
  Synopsis,
  ButtonSingle,
  BookGenre,
  BookAuthor,
  BookRating,
} from "lib/BookStyling";

import { RandomNumber, RandomPrice } from "helpers/RandomPrice";
import { FaStar } from "react-icons/fa";

export const SingleBook = () => {
  const { bookID } = useParams();
  const dispatch = useDispatch();
  const [book, setBook] = useState(Object);
  const [loading, setLoading] = useState(true);

  const itemsAdded = useSelector((store) => store.cart.items);
  const itemAdded = itemsAdded.find((item) => item._id === bookID);

  //Fetch
  const SINGLE_BOOK = `https://final-project-backend-katsiez.herokuapp.com/books/book/${bookID}`;

  useEffect(() => {
    fetch(SINGLE_BOOK)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setBook(json);
        setLoading(false);
      })
      .catch(() => {
        console.error();
      });
  }, [SINGLE_BOOK]);

  if (loading) return <Spinner />;

  return (
    <>
      <Main>
        <TextList>
          <li>{book.title}</li>
        </TextList>
        <Card>
          <Content>
            <Container>
              <Left>
                <img
                  className="book-image"
                  src={book.imageUrl}
                  alt="book_cover"
                />
              </Left>
              <Right>
                <Synopsis>
                  <BookGenre>{book.genre}</BookGenre>
                  <BookAuthor>{book.authors}</BookAuthor>
                  <BookRating>
                    Average rating: {book.average_rating}{" "}
                    <FaStar color="#ffcd3c" />
                  </BookRating>
                  {book.synopsis}
                </Synopsis>
                <ButtonSingle
                  onClick={() => {
                    dispatch(cart.actions.addItem(book));
                  }}
                >
                  <RandomNumber>
                    <RandomPrice />
                    <p>{itemAdded ? "(Added to cart)" : ""}</p>
                  </RandomNumber>
                  Add to cart
                </ButtonSingle>
              </Right>
            </Container>
          </Content>
        </Card>
      </Main>
    </>
  );
};
