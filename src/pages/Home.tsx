import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { charactersAtom } from "../atoms/atoms_state";
import CharacterCard from "../components/CharacterCard";
import Header from "../components/header/Header";
import SearchBar from "../components/searchbar/SearchBar";
import { Character } from "../typings";

// import { Character } from "../typings";

const Home = () => {
  const characters = useRecoilValue(charactersAtom);

  return (
    <div>
      <Header />
      <SearchBar />
      <div className="App">
        {characters?.results?.map((character: Character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
};

export default Home;
