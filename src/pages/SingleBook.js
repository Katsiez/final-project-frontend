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
    <>
      <div className="back">
        <Link to="/" exact="true">
          HOME
        </Link>
      </div>
      <div className="back">
        <Link to="/books" exact="true">
          BACK TO BOOKS
        </Link>
      </div>
      <Main>
        <Text>
          <li>{book.title}</li>
          <li>Rating:{book.average_rating}</li>
        </Text>
        <Card>
          <Content>
            <Container>
              <Left>
                <image className="image" src="../assets/girl.jpg" alt="girl"></image>
              </Left>
              <Right>
                <p className="book-author">{book.authors}</p>
                <p className="book-genre">{book.genre}</p>
                <Synopsis>{book.synopsis}</Synopsis>
                <Button>Add to cart</Button>
              </Right>
            </Container>
          </Content>
        </Card>
      </Main>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  max-width: 715px;
  position: relative;
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
  padding: 0;
  margin: 0;
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
  font-family: "Spectral", serif;
  margin: auto;
  background: #fff;
`;

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  margin: 0 auto;
  display: -webkit-flex;
  display: flex;
`;

const Left = styled.div`
  padding: 20px;
  background: #fafafa;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
`;

const Right = styled.div`
  background: #b4bac0;
  padding: 30px;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #f5f5f5;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 8px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: #fafafa;
    transition: ease-in-out 0.3s;
  }
`;

const Synopsis = styled.p`
  align-itmes: center;
  padding: 10px;
`;
