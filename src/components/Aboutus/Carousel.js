import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import styles from './Carousel.module.css';


export default class Car extends Component {

  getItems  () {
    let tempdata = [];
    let key = 0;
  
    this.props.images.forEach((element) => {
      let line = (
        // <div className={styles.imageCarousel}>
        <div key={this.key}>
        <img className={styles.imageCarousel} alt={element.title} src={element.img} />
        {/* <p className="legend">{element.title}</p> */}
      </div>
      // </div>
      );
      tempdata.push(line);
      return key++;
    });
    return tempdata;
  };

  render() {
      return (
        <div className={styles.container}>
        <Carousel autoPlay  infiniteLoop  emulateTouch showThumbs={false} labels={false} width={300} >
        {this.getItems()}
     </Carousel>
     </div>
      );
  }
}