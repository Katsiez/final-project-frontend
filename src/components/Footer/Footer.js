import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

import {
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>ACCOUNT</FooterLinkTitle>
              <FooterLink to="/signup">Sign up</FooterLink>
              <FooterLink to="/login">Log in</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>BOOKS</FooterLinkTitle>
              <FooterLink to="/books">All books</FooterLink>
              <FooterLink to="/books/bestseller">Browse bestsellers</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>ABOUT US</FooterLinkTitle>
              <FooterLink to="/about">About us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>SOCIALS</FooterLinkTitle>
              {/* A TAGS FOR ACTUAL LINKS */}
              <FooterLink to="/home">Facebook</FooterLink>
              <FooterLink to="/home">Instagram</FooterLink>
              <FooterLink to="/home">Pinterest</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Bookmark Reads</SocialLogo>
            <WebsiteRights>
              rights {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Pinterest">
                <FaPinterest />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};
