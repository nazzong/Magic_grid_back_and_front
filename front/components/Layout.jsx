import React from "react";
import styled, { keyframes } from "styled-components";
import {
  BellOutlined,
  BookOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const HeaderSection = styled.section`
  width: 100%;
  height: 80px;
  padding: 4px 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoHoverAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const LogoImg = styled.img`
  width: 48px;
  height: 48px;

  cursor: pointer;

  &:hover {
    animation: ${LogoHoverAnimation} 1s infinite;
  }
`;

const SearchBar = styled.input`
  margin: 0px 10px;
  width: calc(100% - 212px);
  height: 48px;

  outline: none;
  border: none;

  background-color: #e6e6e6;
  border-radius: 35px;
  padding: 0px 25px;

  color: #222;
  font-size: 22px;
`;

const BellIcon = styled(BellOutlined)`
  width: 48px;
  height: 48px;
  font-size: 20px;
  color: #555;
  line-height: 48px;
  cursor: pointer;

  &:hover {
    animation: ${LogoHoverAnimation} 0.5s forwards;
  }
`;
const BookIcon = styled(BookOutlined)`
  width: 48px;
  height: 48px;
  font-size: 20px;
  color: #555;
  line-height: 48px;
  cursor: pointer;

  &:hover {
    animation: ${LogoHoverAnimation} 0.5s forwards;
  }
`;
const ShareIcon = styled(ShareAltOutlined)`
  width: 48px;
  height: 48px;
  font-size: 20px;
  color: #555;
  line-height: 48px;
  cursor: pointer;

  &:hover {
    animation: ${LogoHoverAnimation} 0.5s forwards;
  }
`;

const BodySection = styled.section`
  padding: 10px 80px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <HeaderSection>
        <LogoImg
          src={`https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/4leaflender%2Fassets%2Fimages%2Flogo%2Ffavicon.png?alt=media&token=1824f89c-3ee3-4de4-accf-4d0d5c2ee25f`}
          alt="Logo"
        ></LogoImg>

        <SearchBar />
        <BellIcon />
        <BookIcon />
        <ShareIcon />
      </HeaderSection>
      <BodySection>{children}</BodySection>
    </>
  );
};

export default Layout;
