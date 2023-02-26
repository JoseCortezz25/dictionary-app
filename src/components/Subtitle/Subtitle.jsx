import React from "react";
import styles from "./Subtitle.module.css";

const Subtitle = ({ subtitle }) => {
  return <h3 className={styles.Subtitle}>{subtitle}</h3>;
};

export default Subtitle;
