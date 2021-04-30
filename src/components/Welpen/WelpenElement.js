import React, { Component } from "react";
import NewsPuppies from "../News/NewsPuppies/NewsPuppies";
import Spinner from "./../Spinner/Spinner";
import styles from "./WelpenElement.module.css";
import Parents from "../Parents/Parents";
import Constants from "../../helper/Constants";
import BreedingCardContainer from "../Offspring/BreedingCardContainer";

class WelpenElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      welpen: [],
      loaded: true,
      showParents: false,
      welpenImagesShow: false,
      breedingShow: false,
      showLitter: false,
      showDogs: false,
      parents: "",
      litterDOB: "",
      breedings: [],
      elementsTitle: "",
      dOBS: "",
    };
  }

  componentDidMount() {
    fetch(Constants.breeding)
      .then((response) => response.json())
      .then((data) => {
        let breedings = [];
        data.data.forEach((element) => {
          let breeding = {
            id: element.id,
            father: element.father.name,
            mother: element.mother.name,
            dateOfBirth: element.dateofbirth,
            description: element.description,
            image: element.image.data.thumbnails[7].url,
            parents: element.mother.name + " x " + element.father.name,
          };
          breedings.push(breeding);
        });
        let elementsTitle = "";
        switch (this.props.language) {
          case "de":
            elementsTitle = "Würfe";
            break;
          case "en":
            elementsTitle = "Litters";
            break;
          default:
            elementsTitle = "Portées";
        }
        fetch(Constants.dogs2)
          .then((response2) => response2.json())
          .then((data2) => {
            let dOBS = [];
            data2.data.forEach((element) => {
              if (element.date_of_birth !== null) {
                if (!dOBS.includes(element.date_of_birth.dateofbirth)) {
                  dOBS.push(element.date_of_birth.dateofbirth);
                }
              }
            });
            this.setState({
              breedings: breedings,
              elementsTitle: elementsTitle,
              dOBS: dOBS,
            });
          });
      });
  }

  parentsSwitchLocal = (element) => {
    this.setState({ parents: element });
    this.props.parentsSwitch();
  };

  welpenSwitchLocal = (element) => {
    this.setState({ litterDOB: element });
    this.props.welpenSwitch();
  };

  breedingSwitchLocal = (element) => {
    this.setState({ litterDOB: element });
    this.props.breedingSwitch();
  };
  getInTheNewHome = (isTrue, element) => {
    if (
      isTrue &&
      this.props.language === "de" &&
      this.props.language !== "en" &&
      this.props.language !== "fr"
    ) {
      return (
        <button
          onClick={() => this.breedingSwitchLocal(element.dob.dateofbirth)}
        >
          Im neuen Zuhause
        </button>
      );
    } else if (
      isTrue &&
      this.props.language === "en" &&
      this.props.language !== "de" &&
      this.props.language !== "fr"
    ) {
      return (
        <button
          onClick={() => this.breedingSwitchLocal(element.dob.dateofbirth)}
        >
          In the new home
        </button>
      );
    } else if (
      isTrue &&
      this.props.language !== "en" &&
      this.props.language !== "de"
    ) {
      return (
        <button
          onClick={() => this.breedingSwitchLocal(element.dob.dateofbirth)}
        >
          Dans le nouveau foyer
        </button>
      );
    } else {
      return null;
    }
  };

  getTitle = () => {
    let elementsTitle = "";
    switch (this.props.language) {
      case "de":
        elementsTitle = "Würfe";
        break;
      case "en":
        elementsTitle = "Litters";
        break;
      default:
        elementsTitle = "Portées";
    }
    return elementsTitle;
  };

  getContent = (x) => {
    let tempdata = [];
    let key = 0;
    x.split("\n").map(function (item) {
      let line = (
        <span className={styles.spanText} key={key}>
          {item}
          <br />
        </span>
      );
      tempdata.push(line);
      return key++;
    });
    return tempdata;
  };

  elements = () => {
    let welpen = [];

    this.props.elements.forEach((element) => {
      var isTrue = false;
      if (this.state.dOBS.includes(element.dob.dateofbirth)) {
        isTrue = true;
      } else {
        isTrue = false;
      }
      if (this.props.language === "en") {
        let part = (
          <div key={element.id}>
            <div className={styles.welpenCard}>
              <div className={styles.dataContainer}>
                <h3 className={styles.header}>
                  {element.translations[0].title}
                </h3>
                {this.getContent(element.translations[0].uebersetzung)}{" "}
                <div className={styles.btn}>
                  <button onClick={() => this.parentsSwitchLocal(element)}>
                    The parents
                  </button>
                  <button
                    onClick={() =>
                      this.welpenSwitchLocal(element.dob.dateofbirth)
                    }
                  >
                    {" "}
                    Week 1 to 9
                  </button>
                  {this.getInTheNewHome(isTrue, element)}
                </div>
              </div>
              <div className={styles.imageContainer}>
                <img
                  src={element.foto.data.thumbnails[3].url}
                  alt={element.name}
                ></img>
              </div>
            </div>
          </div>
        );
        welpen.push(part);
      } else if (this.props.language === "de") {
        let part = (
          <div key={element.id}>
            <div className={styles.welpenCard}>
              <div className={styles.dataContainer}>
                <h3 className={styles.header}>
                  {element.translations[1].title}
                </h3>
                {this.getContent(element.translations[1].uebersetzung)}{" "}
                <div className={styles.btn}>
                  <button onClick={() => this.parentsSwitchLocal(element)}>
                    Die Eltern
                  </button>
                  <button
                    onClick={() =>
                      this.welpenSwitchLocal(element.dob.dateofbirth)
                    }
                  >
                    Woche 1 bis 9{" "}
                  </button>
                  {this.getInTheNewHome(isTrue, element)}
                </div>
              </div>
              <div className={styles.imageContainer}>
                <img
                  src={element.foto.data.thumbnails[3].url}
                  alt={element.name}
                ></img>
              </div>
            </div>
          </div>
        );
        welpen.push(part);
      } else if (this.props.language !== "de" && this.props.language !== "en") {
        let part = (
          <div key={element.id}>
            <div className={styles.welpenCard}>
              <div className={styles.dataContainer}>
                <h3 className={styles.header}>
                  {element.translations[2].title}
                </h3>
                {this.getContent(element.translations[2].uebersetzung)}{" "}
                <div className={styles.btn}>
                  <button onClick={() => this.parentsSwitchLocal(element)}>
                    Les parents
                  </button>
                  <button
                    onClick={() =>
                      this.welpenSwitchLocal(element.dob.dateofbirth)
                    }
                  >
                    Semaine 1 à 9{" "}
                  </button>
                  {this.getInTheNewHome(isTrue, element)}
                </div>
              </div>
              <div className={styles.imageContainer}>
                <img
                  src={element.foto.data.thumbnails[3].url}
                  alt={element.name}
                ></img>
              </div>
            </div>
          </div>
        );

        welpen.push(part);
      }
    });
    return welpen;
  };
  render() {
    if (!this.state.loaded) {
      return (
        <div>
          <Spinner />
        </div>
      );
    }
    if (
      this.state.loaded &&
      !this.props.showParents &&
      !this.props.showLitter &&
      !this.props.showDogs
    ) {
      return (
        <div className={styles.container}>
          <h1 className={styles.mainHeader}>{this.getTitle()}</h1>
          <div>{this.elements()}</div>
        </div>
      );
    }
    if (
      this.state.loaded &&
      this.props.showParents &&
      !this.props.showLitter &&
      !this.props.showDogs
    ) {
      return (
        <div>
          <Parents
            language={this.props.languague}
            parents={this.state.parents}
            defaultSwitch={this.props.defaultSwitch}
          />
        </div>
      );
    }
    if (
      this.state.loaded &&
      !this.props.showParents &&
      this.props.showLitter &&
      !this.props.showDogs
    ) {
      return (
        <div>
          <NewsPuppies
            dob={this.state.litterDOB}
            defaultSwitch={this.props.defaultSwitch}
          />
        </div>
      );
    }
    if (
      this.state.loaded &&
      !this.props.showParents &&
      !this.props.showLitter &&
      this.props.showDogs
    ) {
      return (
        <div>
          <BreedingCardContainer
            breedings={this.state.breedings}
            dob={this.state.litterDOB}
            defaultSwitch={this.props.defaultSwitch}
          />
        </div>
      );
    }
  }
}

export default WelpenElement;
