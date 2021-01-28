import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <h1>home</h1>
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="login">Login</NavLinks>
            </NavItem>
			<NavItem>
              <NavLinks to="signup">Sign up</NavLinks>
            </NavItem>
			<NavItem>
              <NavLinks to="books">All books</NavLinks>
            </NavItem>
			<NavItem>
              <NavLinks to="bestseller">Bestsellers</NavLinks>
            </NavItem>
          </NavMenu>
		  <NavBtn>
			  <NavBtnLink to ="/login">Log in</NavBtnLink>
		  </NavBtn>
		  
        </NavbarContainer>
      </Nav>
    </>
  );
};
