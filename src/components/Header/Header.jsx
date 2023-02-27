import React from "react";
import styles from "./Header.module.css";
import logoAppIcon from "../../../public/images/dictionary.svg";
import Image from "next/image";
import { Search } from "../Search/Search";

const Header = ({ handleSubmit, search, setSearch }) => {
  return (
    <header>
      <div className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <div className={`${styles.logo}`}>
            <Image src={logoAppIcon} alt="" />
          </div>
          {/* <div className="nav__items">options</div> */}
        </nav>
      </div>
      <Search
        setSearch={setSearch}
        search={search}
        handleSubmit={handleSubmit}
      />
    </header>
  );
};

export { Header };
