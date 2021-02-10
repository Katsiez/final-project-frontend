import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ui } from "reducers/ui";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { RiShoppingBagLine } from "react-icons/ri";

export const Navbar = ({ toggle }) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((store) =>
    store.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src="../assets/logo.svg" alt="" />
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/books">All books</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/books/bestseller">Bestsellers</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signup">Login / Sign up</NavBtnLink>
            <RiShoppingBagLine
              onClick={() => dispatch(ui.actions.openCart())}
              size="25px"
              color="#18c399"
              cursor="pointer"
            >
              ({totalItems})
            </RiShoppingBagLine>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
