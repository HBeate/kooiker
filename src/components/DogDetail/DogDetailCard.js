import React, { Component } from "react";
import styles from "./DogDetailCard.module.css";
import ivyImg from "../Ivy/ivy.jpg";

class DogDetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.container}>
        <div>
          <h1 className={styles.mainHeader}>Ivy</h1>
        </div>
        <div className={styles.detailCard}>
          <div className={styles.content}>
            <div className={styles.dataContainer}>
              <h3 className={styles.header}>Ivy-Balea vom Kooikerbeis, </h3>
              <h4 className={styles.born}>né le 23.04.2017</h4>

              <div>
                <div>Tests:</div>
                <table>
                  <tr>
                    <td>Luxation de la rotule: </td>
                    <td>Indemne</td>
                  </tr>
                  <tr>
                    <td>Tares oculaires: </td>
                    <td>Indemne</td>
                  </tr>
                  <tr>
                    <td>Dentition: </td>
                    <td>Ciseaux complets</td>
                  </tr>
                  <tr>
                    <td>Taille: </td>
                    <td>39 cm</td>
                  </tr>
                </table>
              </div>
              <div className={styles.expositions}>
                <p>Exposition canine à Tarbes le 18.11.2018, <br></br>
                Clase ouverte, juge: Roger Barenne<br></br>
                Classement: excellent, CACIB, CACS, Meilleur de race</p>
              </div>
              <div>
                <button>Ahnentafel</button>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img className={styles.imgRight} src={ivyImg} alt={"card"}></img>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default DogDetailCard;
