import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  //Randomize price for all books
  const Random = (props) => {
    const precision = 100; // 2 decimals
    const randomnum = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision); 
    return <div>{randomnum}€</div>;
  }

  return (
    <>
      <Main>
        <Text>
          <li>{book.title}</li>
        </Text>
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
                  <p className="book-genre">{book.genre}</p>
                  <p className="book-author">{book.authors}</p>
                  <p className="book-rating">Average rating: {book.average_rating}</p>
                  {book.synopsis}
                </Synopsis>
                <Button>
                <div className="random-num">
                <Random/>
              </div>
                  Add to cart</Button>
              </Right>
            </Container>
          </Content>
        </Card>
      </Main>
    </>
  );
};

const Main = styled.main`
  margin: 70px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 20px;
  max-width: 715px;
  text-align: left;
`;
const Text = styled.li`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
  font-size: 30px;
  color: #000;
  font-family: "Spectral", serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 50px;
  border-bottom: 1px solid #f0f0f0;
  @media (max-width: 950px) {
    font-size: 17px;
    margin-top: 10px;
  }
  @media (max-width: 660px) {
    font-size: 17px;
    margin-top: 10px;
  }
`;
const Card = styled.section`
  margin: -25px 0 0 -25px;
  padding: 0;
  margin: 10px auto;
  display: flex;
  align-items: stretch;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  background: #fff;
  -webkit-box-shadow: 2px 6px 15px 3px rgba(0, 0, 0, 0.39);
  box-shadow: 2px 6px 15px 3px rgba(0, 0, 0, 0.39);
  -webkit-box-align: stretch;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: 100%;
  font-family: "Spectral", serif;
  margin: auto;
  background: #fafafa;
`;

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  margin: 0 auto;
  display: -webkit-flex;
  display: flex;
  border: 1px solid #f0f0f0;
`;

const Left = styled.div`
  width: 40%;
  background-color: #fafafa;
  border-right: 1px solid #dddddd;
  flex: 1;
  margin: auto;
`;

const Right = styled.div`
  width: 60%;
  padding: 15px;
  font-size: 16px;
  justify-content: center;
  background-color: #f0f0f0;
`;

export const Button = styled.button`
  background-color: #18c399;
  font-family: "Lato", sans-serif;
  align-items: center;
  font-weight: 400;
  color: #2b2b2b;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  margin: 20px;
  margin-top: 4px;
  padding: 8px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #18c3985b;
    transition: ease-in-out 0.3s;
  }
`;

const Synopsis = styled.p`
  align-itmes: center;
  padding: 20px;
`;
