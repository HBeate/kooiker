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
        <div className={styles.dogCard}>
          <h3 className={styles.header}>iiiii</h3>
          <div className={styles.content}>
          <p >
            Dolore et elit do Lorem cupidatat esse elit incididunt Lorem
            excepteur nulla. Sint Lorem sint fugiat minim nulla est deserunt.
            Dolor ullamco qui commodo do veniam quis.
          </p> 
          <img src={this.props.picture} className={styles.imgDog}></img>
          </div>
          <button className={styles.moreButton}>mehr</button>
        </div>
      </div>
    );
  }
}

export default News;
