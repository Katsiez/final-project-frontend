import styled from 'styled-components'
import { Link } from "react-router-dom";

export const ShopBooksButton = styled(Link)`
font-family: "Spectral", serif;
font-size: 20px;
line-height: 1.2em;
display: flex;
width: 20%;
height: 7vh;
color: #222;
padding: 2px;
background-color: #bd9478;
position: relative;
margin: 30px auto;
margin-bottom: -10px;
text-align: center;
align-items: center;
justify-content: center;
text-transform: uppercase;
&:hover {
  transition: all 0.3s ease-in-out;
  background: #bb7b6a;
  color: #010606;
}
@media (max-width: 887px) {
  font-size: 20px;
  letter-spacing: 1px;
  width: 70%;
}
`;