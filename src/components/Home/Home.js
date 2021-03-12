import React, { Component } from "react";
import styles from "./Home.module.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import logo from "./logo.jpg";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.parallax}></div>
        <div className={styles.parallax}>
          <Zoom>
            <div className={styles.header}>
              <h1>Kooikerhondje</h1>
              <h2>“de la bande de rigolos“</h2>
            </div>
          </Zoom>
        </div>
        <div className={styles.parallax}></div>
        <div className={styles.content}>
          <Fade left>
            <div>
              <h2>Le Kooikerhonje, caractéristiques et détention:</h2>
              <p>
                Le Kooikerhondje (chien hollandais de canadière) est un chien
                blanc de petite taille, arrivant à peu près jusqu'aux genoux. Sa
                robe a des plaques rouge-orange. Son poil est de longueur
                moyenne, lisse ou légèrement ondulé. C'est un chien drôle et
                très facile à éduquer. Il est trés affectueux et sociable. Il a
                besoin d´une éducation douce mais cohérente et appropriée,.
                Toute sanction sévère est à éviter. Comme il est très sportif,
                un entraînement à l'agilité, au flyball ou tout autre
                entrainement est approprié. Cette race a également fait ses
                preuves en tant que chien thérapeutique. Mais il est également
                heureux quand on lui fait simplement faire régulièrement de
                l'exercice ; Ce chien rapporteur aime aussi l'eau et toutes
                sortes de jeux de recherche. En raison de sa taille agréable, il
                peut facilement être logé dans un appartement.
              </p>
            </div>
          </Fade>
        </div>
        <div className={styles.parallax1}></div>
        <div className={styles.content2}>
          <Fade right>
            <div className={styles.certificatLogo}>
              <img src={logo2} alt={"logo2"} />
              <img src={logo1} alt={"logo1"} />
              <img src={logo} alt={"logo"} />
            </div>
            <div className={styles.exLinks}>
                <ul>
                  <li><a href="http://association-francaise-kooikerhondje.fr/" target="_blank" rel="noreferrer">Association Francaise Kooikerhond</a></li> 
                  <li><a href="https://www.vom-kooikerbeis.de/" target="_blank" rel="noreferrer">Vom Kooikerbeis</a></li> 
                  <li><a href="https://www.vom-haus-tusburch.de/" target="_blank" rel="noreferrer">Vom Haus Tusburch</a></li> 
                  <li><a href="http://www.rundumahund.com/" target="_blank" rel="noreferrer">Rund uma Hund</a></li>  
                  <li><a href="https://www.cdc-goetzis.at/" target="_blank" rel="noreferrer">CDC Götzis</a></li>  
                </ul>
              </div>
          </Fade>

        </div>

        <div className={styles.parallax1}></div>
      </div>
    );
  }
}

export default Home;
