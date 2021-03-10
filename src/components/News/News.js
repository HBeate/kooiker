import React, { Component } from "react";
import styles from "./News.module.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.container}>
        <div>
          <h1 className={styles.mainHeader}>Actualités</h1>
        </div>
        <div className={styles.newsCard}>

          <div className={styles.content}>
            <div className={styles.dataContainer}>
            <h3 className={styles.header}>Première portée d'Ivy :</h3>
              Tout s'est très bien passé et le 07.09.2019, la portée "P" est
              née, à savoir 3 mâles et 2 femelles. La naissance s'est déroulée
              sans problème et a été maîtrisée par Ivy souverain et en peu de
              temps.
              <div><button >détails</button></div>
            </div>
            <div className={styles.imageContainer}>
              <img className={styles.imgRight} src={this.props.picture} alt={"card"}></img>
            </div>
          </div>

        </div>

        <div className={styles.newsCard}>

          <div className={styles.content}>
            <div className={styles.imageContainer}>
            
              <img className={styles.imgLeft} src={this.props.picture} alt={"card"}></img>
            </div>
            <div className={styles.dataContainer}>
                        <h3 className={styles.header}>
            Planification de la première portée:
          </h3>
              Jet-Set Declic est prévu comme le futur père. Les contacts avec
              son propriétaire sont déjà pris et j'espère que le rendez-vous
              sera couronné de succès.
              <div><button className={styles.buttonRight}>détails</button></div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default News;
