import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


export default class Car extends Component {

  getItems  () {
    let tempdata = [];
    let key = 0;
  
    this.props.images.forEach((element) => {
      let line = (
        <div key={this.key}>
        <img alt={element.title} src={element.img} />
        {/* <p className="legend">{element.title}</p> */}
      </div>
      );
      tempdata.push(line);
      return key++;
    });
    return tempdata;
  };

  render() {
      return (
        <Carousel autoPlay dynamicHeight  infiniteLoop  emulateTouch showThumbs labels={false} width={500}>
        {this.getItems()}
     </Carousel>
      );
  }
}