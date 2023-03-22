import React from "react";
import { StyledHeader, StyledHeaderWrapper } from "./Header.style";
import NavBar from "../NavBar/NavBar";
import Logo from "../HeaderLogo/Logo";

const header = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Logo />
        <NavBar />
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default header;
