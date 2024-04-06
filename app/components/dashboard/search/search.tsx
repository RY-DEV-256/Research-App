import React from 'react';
import styles from "./search.module.css";

function Search({ placeholder }:{ placeholder: string}) {
  return (
    <div className={styles.container}>
      <label htmlFor="search">Search :</label>
      <input type="search" className={styles.search} placeholder={placeholder} />
    </div>
  )
}

export default Search;
