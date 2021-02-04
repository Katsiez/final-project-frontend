import React from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-scroll";

export const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" exact>
            <img src="../assets/logo.svg" alt="" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <IconContext.Provider
              value={{ color: "white", size: "50px", margin: "0 auto" }}
            >
              <div>
                <FaBars />
              </div>
            </IconContext.Provider>
          </MobileIcon>
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
            <NavBtnLink><Link><BiCartAlt size={20}/></Link></NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
