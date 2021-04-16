import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import styles from './Carousel.module.css';


export default class Car extends Component {
  constructor( props ) {
    super( props );

    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
}

getKey(){
    return this.keyCount++;
}

  getItems  () {
    let tempdata = [];
    this.props.images.forEach((element) => {
      let line = (
        <img key={this.getKey} className={styles.imageCarousel} alt={element.title} src={element.img} />
      );
      tempdata.push(line);
    });
    return tempdata;
  };

  render() {
      return (
        <div className={styles.container}>
        <Carousel 
        autoPlay={true}  
        infiniteLoop={true}  
        emulateTouch 
        showThumbs={false} 
        labels={false} 
        width={300} 
        showStatus={false}
        interval={3000}
        showArrows={false}
        >
        {this.getItems()}
     </Carousel>
     </div>
      );
  }
}