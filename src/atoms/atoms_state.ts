import { atom, RecoilState, selector } from "recoil";
import { getAllCharacters } from "../api/api";

export const filtersInput = atom({
  key: "Filter",
  default: { name: "", specie: "", gender: "", status: "" },
});

export const queryParams = selector({
  key: "QueryParams",
  get: ({ get }) => {
    const filters = get(filtersInput);
    let params = "";

    if (filters.name.length > 0) {
      params = params.concat(`&name=${filters.name}`);
    }
    if (filters.specie.length > 0) {
      params = params.concat(`&species=${filters.specie}`);
    }
    if (filters.gender.length > 0) {
      params = params.concat(`&gender=${filters.gender}`);
    }
    if (filters.status.length > 0) {
      params = params.concat(`&status=${filters.status}`);
    }
    params = params.toLowerCase().replace(" ", "");
    return params;
  },
});

export const charactersAtom = selector({
  key: "Carachaters/All",
  get: async ({ get }) => {
    return getAllCharacters(get(queryParams)).then((characters) => characters);
  },
});
