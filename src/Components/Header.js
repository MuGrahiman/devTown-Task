import React, { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
import {
  StyledHeader,
  stickyheader,
  NavLogo,
  NavWrapper,
  NavCNTWrapper,
  NavH1,
} from "../Styles/headerStyle";
import { Button, Container } from "../Styles/globalStyles";
import disneyCastle from "../Assets/Disneyfav.png";
import SearchBar from "./SearchBar";
const HeaderComponent = ({ onSearch }) => {
  const headerRef = useRef(null);
  const [search, setSearch] = useState("");
  const [Header, setHeader] = useState(StyledHeader);
  const stickyHeaderFunct = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      )
        setHeader(stickyheader);
      else setHeader(StyledHeader);
    });
  };

  useEffect(() => {
    stickyHeaderFunct();
    return () => window.removeEventListener("scroll", stickyHeaderFunct);
  });

  return (
    <>
      <Header ref={headerRef}>
        <Container>
          <NavWrapper>
            <NavCNTWrapper>
              <NavLogo src={disneyCastle} alt="disneyLogo" />
              <NavH1>Multi-Mart</NavH1>
            </NavCNTWrapper>
            <NavCNTWrapper>
              <SearchBar
                setValue={(value) => {
                  onSearch(value);
                  setSearch(value);
                }}
                Value={search}
              />
              <Button
                onClick={() => onSearch(search)}
                bg="#de4242"
                h_bg="#fff"
                c="#fff"
                h_c="#de4242"
              >
                Search
              </Button>
            </NavCNTWrapper>
          </NavWrapper>
        </Container>
      </Header>
    </>
  );
};

export default HeaderComponent;
