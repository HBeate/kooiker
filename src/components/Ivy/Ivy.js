import React, { Component } from "react";
import DogDetailCard from "../DogDetail/DogDetailCard";
import styles from "./Ivy.module.css";

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
