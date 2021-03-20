import React, { Component } from "react";
import DogDetailCard from "../DogDetail/DogDetailCard";
import Constants from "../../helper/Constants";

class Ivy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog:'',
      pedigree:''
    };
  }
  componentDidMount() {
    fetch(Constants.ivy)
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result.data[0])
        let ivy = result.data[0];
        let pedigree = result.data[0].pedigree.data.full_url;
        this.setState({
          dog:ivy,
          pedigree:pedigree
        });
      });
  }

  render() {
    return (
      <div>
        <DogDetailCard dog={this.state.dog} pedigree={this.state.pedigree}/>
      </div>
    );
  }
}

export default Ivy;
