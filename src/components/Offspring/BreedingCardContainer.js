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
  getButtonLabelBack= () => {
    let back = "";
    switch (this.props.language) {
      case "de":
        back = "zurück";
        break;
      case "en":
        back = "back";
        break;
      default:
        back = "retour";
    }
    return back;
  };
  getNewHome= () => {
    let newHome = "";
    switch (this.props.language) {
      case "de":
        newHome = "Im neuen Zuhause";
        break;
      case "en":
        newHome = "In the new home";
        break;
      default:
        newHome = "Dans le nouveau foyer";
    }
    return newHome;
  };
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
          <h1 className={styles.mainHeader}>{this.getNewHome()}</h1>
          <button onClick={this.props.defaultSwitch}>{this.getButtonLabelBack()}</button>
        </div>

        {this.getBreedings()}
      </div>
    );
  }
}

export default BreedingCardContainer;

