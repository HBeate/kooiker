import React, { Component } from "react";
import styles from "./DogDetail.module.css";

class DogDetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.container}>
        <div>
          <h1 className={styles.mainHeader}>
            Planification de la première portée
          </h1>
        </div>
        <div className={styles.newsCard}>
          <div className={styles.content}>
            <div className={styles.dataContainer}>
              <h3 className={styles.header}>
                Ivy-Balea vom Kooikerbeis, né le 23.04.2017
              </h3>
              <div>Tests:</div>
              <div>Maladie de Von Willebrand/ENM: Indemne</div>
              <div>Luxation de la rotule: Indemne</div>
              <div>Tares oculaires: Indemne</div>
              <div>Dentition: Ciseaux complets</div>
              <div>Taille: 39 cm</div>
              <div>
                <p>
                Exposition canine à Tarbes le 18.11.2018,                </p>
                <p>Clase ouverte, juge: Roger Barenne</p>
                <p>Classement: excellent, CACIB, CACS, Meilleur de race</p>
              </div>
              <div>
                <div>Le CS est de 0,195 %</div>
                <div>L'indice d'implexe est de 96,77 %</div>
              </div>
              <div>
                <button>Ahnentafel</button>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img
                className={styles.imgRight}
                src={this.props.picture}
                alt={"card"}
              ></img>
            </div>
          </div>
        </div>

        <div className={styles.newsCard}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <img
                className={styles.imgLeft}
                src={this.props.picture}
                alt={"card"}
              ></img>
            </div>
            <div className={styles.dataContainer}>
              <h3 className={styles.header}>
                Planification de la première portée:
              </h3>
              Jet-Set Declic est prévu comme le futur père. Les contacts avec
              son propriétaire sont déjà pris et j'espère que le rendez-vous
              sera couronné de succès.
              <div>
                <button className={styles.buttonRight}>détails</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetailCard;
