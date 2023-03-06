import React from "react";
import styles from "./Header.module.css";
import logoAppIcon from "../../../public/images/dictionary.svg";
import Image from "next/image";
import { Search } from "../Search/Search";
import { useContext } from "react";
import { ThemeContext } from "src/context/useTheme";
import { ToggleButton } from "../ToggleButton/ToggleButton";

const Header = ({ handleSubmit, search, setSearch }) => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <header>
      <div className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <div className={`${styles.logo}`}>
            <Image src={logoAppIcon} alt="" />
          </div>
          <div className="nav__items">
            <ToggleButton click={toggleTheme} status={darkMode} />
          </div>
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
