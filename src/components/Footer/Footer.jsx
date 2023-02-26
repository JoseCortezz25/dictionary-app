import React from "react";
import styles from "./Footer.module.css";
import githubIcon from "../../../public/images/github.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <nav>
        <div className={styles.footer__icon}>
          <a
            href="https://github.com/JoseCortezz25"
            target="_blank"
            rel="nofollow noopener"
          >
            <Image src={githubIcon} alt="" />
          </a>
        </div>
        <p>
          Coded by <strong>Alfonso Chavarro</strong>
        </p>
      </nav>
    </footer>
  );
};

export { Footer };
