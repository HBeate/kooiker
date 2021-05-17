import React, { Component } from "react";
import BreedingCard from "./BreedingCard";
import styles from "./BreedingCardContainer.module.css";

class BreedingCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualDog: { name: "unknown" },
      test: "hans",
    };
  }

  onDogSelected = (dog) => {
    let obj = {
      actualDog: dog,
    };
    this.setState(obj);
  };

  getBreedings = () => {
    let widgets = [];
    this.props.breedings.forEach((element) => {
      if (element.dateOfBirth === this.props.dob) {
        widgets.push(
          <BreedingCard
            onClick={this.onDogSelected}
            key={element.id}
            breeding={element}
          />
        );
      }
    });
    return widgets;
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.mainHeaderContainer}>
          <div>

          <h1 className={styles.mainHeader}>In the new Home</h1>
          </div>
          <div className={styles.headerButtonBack}>

          <button onClick={this.props.defaultSwitch}>Back</button>
          </div>
        </div>

        {this.getBreedings()}
      </div>
    );
  }
}

export default BreedingCardContainer;
