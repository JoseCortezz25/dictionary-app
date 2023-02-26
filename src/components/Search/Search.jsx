import React from "react";
import styles from './Search.module.css'

const Search = ({ handleSubmit, search, setSearch }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.Search}>
      <input 
        
        type="text" 
        placeholder="Search for any words..." 
        value={search}
        onChange={({target}) => setSearch(target.value)}
      />
    </form>
  );
};

export { Search };
