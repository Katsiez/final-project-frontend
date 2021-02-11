import styled from "styled-components";
import { Button } from "lib/Button";
import { Link } from "react-router-dom";

export const RightCart = styled.div`
  background-color: #d6f1e9;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 300px;
  overflow-y: scroll;
  padding-top: 20px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (min-width: 667px) {
    width: 400px;
  }
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const CloseButton = styled(Button)`
  height: 30px;
  width: 30px;
  padding: 0;
  border: none;
`;

export const Line = styled.div`
  border-bottom: 1px solid black;
  width: 200px;
  margin: 10px;
`;

export const CartProducts = styled.ul`
  padding: 0;
`;

export const ToShop = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 30px;
  font-size: 16px;
  background: transparent;
  padding: 0 20px;
  text-decoration: none;
  color: black;
  margin: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #dad41e;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

export const CartProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const ProductImg = styled.img`
  height: 120px;
`;

export const ProductWrapper = styled.div`
  padding: 20px;
  display: flex;
  background: white;
  @media screen and (max-width: 768px) {
    padding: 12px;
    margin-top: 5px;
    margin-right: 5px;
  }
`;

export const RemoveButton = styled(Button)`
  height: 30px;
  width: 30px;
  padding: 0;
  margin: auto;
  border: none;
  left: 70%;
  right: 0;
  position: absolute;
  @media screen and (max-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

export const Details = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    margin-left: 3px;
  }
`;
