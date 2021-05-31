import React, { Component } from "react";
import styles from "./Impressum.module.css";
import {Helmet} from "react-helmet";

class Impressum extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
                                          <Helmet> 
          <title>Impressum | Kooikerhondje</title>
          <meta
            name="description"
            content="Kooikerhondje de la bande de rigolos"
          />
          <meta
            name="keywords"
            content="Kooikerhondje, Kooiker, breeding, puppies, France"
          />
          <link rel="canonical" href="https://kooiker-fr.com/impressum" />
          </Helmet>
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
