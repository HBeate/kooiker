import React, { Component } from "react";
import DogDetailCard from "../DogDetail/DogDetailCard";
import Constants from "../../helper/Constants";

class Ivy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog:'',
    };
  }
  componentDidMount() {
    fetch(Constants.ivy)
      .then((resp) => resp.json())
      .then((result) => {
        let ivy = result.data[0];
        this.setState({
          dog:ivy
        });
      });
  }

  render() {
    return (
      <div>
        <DogDetailCard dog={this.state.dog}/>
      </div>
    );
  }
}

export default Ivy;
