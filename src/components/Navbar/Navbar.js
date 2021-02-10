import React from "react";
import { useDispatch, useSelector} from 'react-redux'
//import { FaBars } from "react-icons/fa";
//import { IconContext } from "react-icons";
import { ui } from 'reducers/ui'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  //MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { RiShoppingBagLine } from "react-icons/ri";
import { Subtitle } from "lib/Text";
//import { Link } from "react-scroll";

export const Navbar = ({ toggle }) => {
  const dispatch = useDispatch()
  const totalItems = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.quantity)), 0)))
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src="../assets/logo.svg" alt="" />
          </NavLogo>
          {/* <MobileIcon onClick={toggle}>
            <IconContext.Provider
              value={{ color: "white", size: "50px", margin: "0 auto" }}
            >
              <div>
                <FaBars />
              </div>
            </IconContext.Provider>
          </MobileIcon> */}
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
           <RiShoppingBagLine onClick={() => dispatch(ui.actions.openCart())} size="25px" color="#2b2b2b">Cart<Subtitle>({totalItems})</Subtitle></RiShoppingBagLine>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
