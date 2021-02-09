import React from "react";
import styled from "styled-components";

export const Banner = () => {
  return (
    <>
      <Main>
        <Text>
          <BannerP>
            Get your first book for 50% OFF with code <strong>PRELOVED</strong>{" "}
            at checkout.{" "}
          </BannerP>
        </Text>
      </Main>
    </>
  );
};

const Main = styled.section`
  background: #38392b;
  height: 60px;
  margin-bottom: -20px;
  padding: 5px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  posiiton: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 9px 4px 4px #ccc;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
const Text = styled.div`
  font-family: "Spectral", serif;
  font-size: 16px;
  font-weight: light;
  display: flex;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ##303131;
  color: #fafafa;
  @media screen and (max-width: 667px) {
    font-size: 14px;
    padding-left: 3px;
    padding-right: 3px;
    margin-top: 0s;
    text-align: left;
  }
`;
const BannerP = styled.p`
  color: #fafafa;
  font-size: 18px;
  @media screen and (max-width: 667px) {
    font-size: 14px;
    margin-top: 0 auto;
  }
`;
