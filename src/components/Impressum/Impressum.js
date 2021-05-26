import React, { Component } from "react";
import styles from "./Impressum.module.css";

class Impressum extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <div >
          <h1 className={styles.mainHeader}>Impressum</h1>
        </div>
        <div className={styles.content}>
          <h2 className={styles.header}>Helga Henny</h2>
          <p>Chemin de Lanegrand<br></br>
          32400 Fustérouau</p>
          <p className={styles.mailImpressum}><a href="mailto: helga-henny@kooiker-fr.com">helga-henny@kooiker-fr.com</a> </p>
        </div>
        </div>
    );
  }
}

export default Impressum;
