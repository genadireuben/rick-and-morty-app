import { StyledNavBar } from "./NavBar.style";

const NavBar = () => {
  return (
    <StyledNavBar>
      <a href="/characters">Characters</a>
      <a href="/locations">Locations</a>
      <a href="/episodes">Episodes</a>
    </StyledNavBar>
  );
};

export default NavBar;
