import React from "react";
import styles from "./ToggleButton.module.css";

const ToggleButton = ({ click, status }) => {
  return (
    <button
      className={status ? `${styles.ToggleButton} ${styles.active}` : `${styles.ToggleButton}`}
      onClick={click}
    >
      <span></span>
    </button>
  );
};

export { ToggleButton };
