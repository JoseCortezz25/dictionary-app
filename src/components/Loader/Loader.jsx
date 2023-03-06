import React from "react";
import styles from './Loader.module.css'

const Loader = () => {
  return <div class={styles['lds-ripple']}><div></div><div></div></div>;
};

export { Loader };
