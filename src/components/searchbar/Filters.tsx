import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { filtersInput } from "../../atoms/atoms_state";
import { QueryParams } from "../../typings";

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
    <div>
      <div>
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
        <button onClick={handleFilters}>pesquisar</button>
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default Filters;
