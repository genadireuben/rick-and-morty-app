import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { filtersInput } from "../../atoms/atoms_state";
import { QueryParams } from "../../typings";
import { StyledFiltersContainer, StyledInput } from "./Filters.styled";

const initialState = {
  name: "",
  specie: "",
  gender: "",
  status: "",
};
const Filters = () => {
  const [inputValue, setInputvalue] = useState<QueryParams>(initialState);
  const species = [
    "Mythological",
    "Human",
    "Humanoid",
    "Alien",
    "Robot",
    "Animal",
    "Poopybutthole",
    "Disease",
    "Cronenberg",
    "unknown",
  ];
  const status = ["Alive", "Dead", "unknown"];
  const genders = ["Female", "Male", "Genderless", "unknown"];

  const [, setFilter] = useRecoilState(filtersInput);

  const cleanInputs = () => {
    setInputvalue(initialState);
  };

  const handleFilters = () => {
    setFilter(inputValue);
    cleanInputs();
  };

  const handleChange = (e: React.SyntheticEvent): void => {
    const { name, value } = e.target as HTMLInputElement;
    setInputvalue((prev) => ({ ...prev, [name]: value }));
  };
  console.log(inputValue);
  return (
    <StyledFiltersContainer>
      <StyledInput>
        <input
          type="text"
          name="name"
          id="filter-by-name"
          placeholder="Filter by name..."
          value={inputValue.name}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleFilters();
          }}
        />
        <button onClick={handleFilters}>
          <img src="assets/images/Leading Icon.svg" alt="search-icon" />
        </button>
      </StyledInput>
      <StyledInput>
        <select name="specie" value={inputValue.specie} onChange={handleChange}>
          <option value="" disabled>
            Species
          </option>
          {species.map((specie) => (
            <option key={specie} value={specie}>
              {specie}
            </option>
          ))}
        </select>
      </StyledInput>
      <StyledInput>
        <select name="gender" value={inputValue.gender} onChange={handleChange}>
          <option value="" disabled>
            Gender
          </option>
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </StyledInput>
      <StyledInput>
        <select name="status" value={inputValue.status} onChange={handleChange}>
          <option value="" disabled>
            Status
          </option>
          {status.map((stat) => (
            <option key={stat} value={stat}>
              {stat}
            </option>
          ))}
        </select>
      </StyledInput>
    </StyledFiltersContainer>
  );
};

export default Filters;
