import { React, useState } from "react";
import css from "./SearchBar.module.css";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className={css.containerbody}>
      <form onSubmit={getSearch} className={css.searchform}>
        <input
          className={css.searchbar}
          type="text"
          onChange={updateSearch}
          placeholder="Which schwag do you like?"
        />

        <img src="\images\search.svg" alt="" className={css.searchimage} />
      </form>
    </div>
  );
};
