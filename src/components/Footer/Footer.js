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
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signin">Sign in</FooterLink>
              <FooterLink to="/about">About us</FooterLink>
              <FooterLink to="/bestseller">Browse bestsellers</FooterLink>
              <FooterLink to="/signin">Sign in</FooterLink>
              <FooterLink to="/signin">Sign in</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signin">Sign in</FooterLink>
              <FooterLink to="/about">About us</FooterLink>
              <FooterLink to="/bestseller">Browse bestsellers</FooterLink>
              <FooterLink to="/signin">Sign in</FooterLink>
              <FooterLink to="/signin">Sign in</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signin">Sign in</FooterLink>
              <FooterLink to="/about">About us</FooterLink>
              <FooterLink to="/bestseller">Browse bestsellers</FooterLink>
              <FooterLink to="/signin">Sign in</FooterLink>
              <FooterLink to="/signin">Sign in</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Socials</FooterLinkTitle>
              {/* A TAGS FOR ACTUAL LINKS */}
              <FooterLink to="/signin">Sign in</FooterLink>
              <FooterLink to="/about">About us</FooterLink>
              <FooterLink to="/bestseller">Browse bestsellers</FooterLink>
              <FooterLink to="/signin">Sign in</FooterLink>
              <FooterLink to="/signin">Sign in</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">logo</SocialLogo>
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
