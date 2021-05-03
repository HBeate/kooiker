import React from "react";
import styles from "./Spinner.module.css";
const spinner = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.loaderText}>Kooikerhondje “de la bande de rigolos“</h2>
    <div className={styles.loader}></div>
  </div>
);
export default spinner;
