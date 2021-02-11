import styled from "styled-components";

//ALL BOOKS AND BESTSELLERS//
export const Text = styled.title`
  display: flex;
  text-align: center;
  padding: 60px 0 40px;
  font-size: 60px;
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
export const TextUnder = styled.title`
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

export const Subtext = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.87);
  font-family: "Lora", serif;
`;

export const AllBooksInfo = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 50px;
  padding: 40px;
  font-family: "Lora", serif;
  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 0;
    min-height: 25vh;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: auto;
    min-height: 25vh;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: auto;
    min-height: 20vh;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: auto;
    min-height: 25vh;
    justify-content: space-evenly;
  }
`;

export const BookCardAll = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20vh;
  width: 25%;
  border: 1px solid #f0f0f0;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: auto;
    min-height: 20vh;
    justify-content: space-evenly;
  }
`;

export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20vh;
  width: 20%;
  border: 0.5px solid #636363;
  background-color: #eef9f6;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: auto;
    min-height: 20vh;
    justify-content: space-evenly;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

export const BookTitle = styled.p`
  font-weight: bold;
  font-size: 16px;
  text-align: left;
  &:hover {
    text-decoration: underline;
  }
`;

export const BookAuthor = styled.p`
  color: #141313;
  text-decoration: none;
  font-family: "Lora", serif;
  font-size: 16px;
  &:hover {
    color: #18c399;
  }
`;

//SINGLE BOOK//
export const Main = styled.main`
  margin: 70px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 20px;
  max-width: 715px;
  text-align: left;
`;

export const Left = styled.div`
  width: 40%;
  background-color: #fafafa;
  border-right: 1px solid #dddddd;
  flex: 1;
  margin: auto;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Right = styled.div`
  width: 60%;
  padding: 15px;
  font-size: 16px;
  justify-content: center;
  background-color: #f0f0f0;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 5px;
    text-align:left;
  }
`;

export const TextList = styled.li`
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

export const Card = styled.section`
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

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: 100%;
  font-family: "Spectral", serif;
  margin: auto;
  background: #fafafa;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 300px;
  margin: 0 auto;
  display: -webkit-flex;
  display: flex;
  border: 1px solid #f0f0f0;
`;

export const BookGenre = styled.p`
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  align-items: center;
  text-align: center;
  font-weight: 400;
  color: #2b2b2b;
  background-color: #18c3985b;
  padding: 2px;
  width: fit-content;
  margin: 2px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.2px;
`;
export const ButtonSingle = styled.button`
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

export const Synopsis = styled.p`
  align-itmes: center;
  padding: 20px;
`;

export const BookRating = styled.p`
  font-family: "Lato", sans-serif;
  margin-bottom: 15px;
`;
