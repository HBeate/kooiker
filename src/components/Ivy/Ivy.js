import React, { Component } from "react";
import DogDetailCard from "../DogDetail/DogDetailCard";

class Ivy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <DogDetailCard />
      </div>
    );
  }
}

export default Ivy;
