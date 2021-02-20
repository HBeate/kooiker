import React, { Component } from "react";
import styles from "./Home.module.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.parallax}></div>
        <div className={styles.parallax}>
          <Zoom>
            <div className={styles.header}>
              <h1>Kooikerhondje “de la bande de rigolos“</h1>
            </div>
          </Zoom>
        </div>
        <div className={styles.parallax}></div>
        {/* <div className={styles.parallax}> */}
        
          <div className={styles.content}>
          <Fade left>
            <div>
              <h2>Kooikerhondje Steckbrief</h2>
              <p>
                Der Kooikerhondje, auch Nederlandse Kooikerhondje genannt, ist
                ein ehemaliger Jagdhund aus den Niederlanden, der heute
                hauptsächlich als Familienhund Verwendung findet. Hier im
                Steckbrief bekommt ihr Informationen über die Geschichte,
                Haltung und Pflege der Hunderasse.
              </p>
            </div>
            </Fade>
            <Fade right>
            <div>
              <h2>Wesen und Charakter</h2>
              <p>
                Der Kooikerhondje ist ein lebhafter und fröhlicher Begleithund,
                der seinem Besitzer treu ergeben und kooperativ ist. Der
                intelligente Hund lässt sich gut erziehen und strahlt
                Lebensfreude aus. Er ist kein Kläffer und verhält sich Fremden
                gegenüber eher zurückhaltend. Auch anderen Hunden gegenüber
                verhalten sich die kleinen Hund schüchtern und reagieren nie mit
                Aggression. Der Kooiker ist verspielt und temperamentvoll –
                verhält sich beim Spiel mit Kindern jedoch vorsichtig. In der
                Wohnung kuschelt der verschmuste Hund gerne und genießt
                Streicheleinheiten. Durch die gemütliche und anpassungsfähige
                Art ist er ein angenehmer Begleithund für Familien.
              </p>
            </div>
            </Fade>
          </div>
        
        {/* </div>*/}
        <div className={styles.parallax1}></div>
        {/* <div className={styles.parallax}>  */}
        
          <div className={styles.content}>
            <h2>Kooikerhondje Steckbrief</h2>
          </div>
        
        {/* </div> */}
        <div className={styles.parallax1}></div>
      </div>
    );
  }
}

export default Home;
