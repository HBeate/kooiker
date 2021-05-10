import React from "react";
//import { NavLink } from "react-router-dom";
import styles from "./Success.module.css";


const success = (props) => {

  return (
    <div className={styles.container}>
        <div className={styles.successElement}>
          <h1>{props.success}</h1>
        </div>
    </div>
  );
};
export default success;
