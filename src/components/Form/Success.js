import React from "react";
//import { NavLink } from "react-router-dom";
import styles from "./Success.module.css";


const success = () => {

  return (
    <div className={styles.container}>
        <div className={styles.successElement}>
          <h1>{this.props.success}</h1>
        </div>
    </div>
  );
};
export default success;
