import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { charactersAtom } from "../../atoms/atoms_state";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Header from "../../components/Header/Header";
import MainLogo from "../../components/MainLogo/MainLogo";
import { Character } from "../../typings";
import { StyledCardsWrapper, StyledHome } from "./Home.style";
import Filters from "../../components/Filters/Filters";

// import { Character } from "../typings";

const Home = () => {
  const characters = useRecoilValue(charactersAtom);

  return (
    <StyledHome>
      <Header />
      <MainLogo />
      <Filters />
      <StyledCardsWrapper>
        {characters?.results?.map((character: Character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </StyledCardsWrapper>
    </StyledHome>
  );
};

export default Home;
