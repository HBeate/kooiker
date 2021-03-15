import React, { Component } from "react";
import styles from "./Footer.module.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.Footer}>
        <div className={styles.Copyright}>
          <h2>Kooikerhondje</h2>
          <h3>"de la bande de rigolos"</h3>
          
        </div>
        <div className={styles.Favicon}>
          <a href="1#">
            <i className ="far fa-envelope"></i>
          </a>
          <a href="2#">
          <i className="fas fa-map-marker-alt"></i>
          </a>
        </div>
        <div className={styles.Copyright1}>
        <h6>Copyright © 2021 Alle Rechte vorbehalten</h6>
        </div>
      </div>
    );
  }
}

export default Footer;
