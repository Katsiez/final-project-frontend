import React from 'react'
import styled from 'styled-components/macro'

export const Footer = () => {
  return (
    <FooterMain>
      <Title>Pick a book</Title>
      <ul class="link-group">
        <li><a href="/books">All books</a></li>
        <li><a href="/books/fiction">Fiction</a></li>
        <li><a href="/books/new_releases/new_releases">New releases</a></li>
        </ul>
    </FooterMain>
  )
}

const FooterMain = styled.footer`
font-family: 'Spectral', serif;
width: 100%;
justify-content: space-between;
  padding: 20px 0;
  background: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
    border-top: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.h2`
  text-align: left;
  color: #14A647;
  font-size: 20px;
  font-weight: 300;
@media (min-width: 1024px) {
  margin: 5px;
}
`;