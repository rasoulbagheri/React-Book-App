import React from "react";
// import { IoSearchSharp } from "react-icons";
import { BsSearch } from "react-icons/bs";
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, searchHandler, searchClear }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onKeyUp={searchClear}
      />
     </div>
  );
}

export default SearchBox;
