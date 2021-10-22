import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";

function Search({ filterCoins, expand }) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    filterCoins(search);
  }, [search]);

  useEffect(() => {
    setSearch("");
  }, [expand]);
  return (
    <div className={styles.search}>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className={styles.input}
        placeholder={"Search..."}
      />
    </div>
  );
}

export default Search;
