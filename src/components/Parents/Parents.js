import React, { Component } from "react";
import styles from "./Parents.module.css";
import { Carousel } from "react-responsive-carousel";

class Parents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "none",
      showMother: "none",
      showFather: "none",
      dog: "",
      showGallery: "none",
      images: [],
      loaded: true,
      alc: "",
      ic: "",
      parents: true,
      parent: "",
      parentName: "",
    };
  }
  showPedigreeMother = () => {
    let img = [];
    let key = 0;
    this.props.parents.mutter.pedigrees.forEach((element) => {
      img.push(
        <img src={element.directus_files_id.data.full_url} alt={key}></img>
      );
      key++;
    });
    this.setState({
      parents: false,
      parentName: this.props.parents.mutter.name,
      parent: img,
    });
  };
  getParentsBack = () => {
    this.setState({
      parents: true,
    });
  };

  showPedigreeFather = () => {
    let img = [];
    let key = 0;
    this.props.parents.vater.pedigrees.forEach((element) => {
      img.push(
        <img src={element.directus_files_id.data.full_url} alt={key}></img>
      );
      key++;
    });
    this.setState({
      parents: false,
      parentName: this.props.parents.vater.name,
      parent: img,
    });
  };


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


  getWillebrand = () => {
    let willebrand = "";
    switch (this.props.language) {
      case "de":
        willebrand = "frei";
        break;
      case "en":
        willebrand = "free";
        break;
      default:
        willebrand = "indemne";
    }
    return willebrand;
  };
  getLabelPatella = () => {
    let labelPatella = "";
    switch (this.props.language) {
      case "de":
        labelPatella = "Patella: ";
        break;
      case "en":
        labelPatella = "Patella: ";
        break;
      default:
        labelPatella = "Luxation de la rotule: ";
    }
    return labelPatella;
  };

  getPatella = () => {
    let patella = "";
    switch (this.props.language) {
      case "de":
        patella = "frei";
        break;
      case "en":
        patella = "free";
        break;
      default:
        patella = "indemne";
    }
    return patella;
  };
  getLabelEyes = () => {
    let labelEyes = "";
    switch (this.props.language) {
      case "de":
        labelEyes = "Augen: ";
        break;
      case "en":
        labelEyes = "Eyes: ";
        break;
      default:
        labelEyes = "Tares oculaires: ";
    }
    return labelEyes;
  };
  getEyes = () => {
    let eyes = "";
    switch (this.props.language) {
      case "de":
        eyes = "o.B.";
        break;
      case "en":
        eyes = "without findings";
        break;
      default:
        eyes = "indemne";
    }
    return eyes;
  };
  getLabelDentures = () => {
    let labelDentures = "";
    switch (this.props.language) {
      case "de":
        labelDentures = "Gebiss: ";
        break;
      case "en":
        labelDentures = "Dentures: ";
        break;
      default:
        labelDentures = "Dentition: ";
    }
    return labelDentures;
  };

  getDenturesMother = () => {
    let dentures = "";
    switch (this.props.language) {
      case "de":
        if (this.props.parents.mutter.gebiss === "schere") {
          dentures = "Schere";
        } else if (this.props.parents.mutter.gebiss === "komplette Schere") {
          dentures = "komplette Schere";
        } else {
          dentures = "Zangengebiss";
        }
        break;
      case "en":
        if (this.props.parents.mutter.gebiss === "schere") {
          dentures = "scissors";
        } else if (this.props.parents.mutter.gebiss === "komplette Schere") {
          dentures = "complete scissors";
        } else {
          dentures = "pincer bite";
        }
        break;
      default:
        if (this.props.parents.mutter.gebiss === "schere") {
          dentures = "ciseaux";
        } else if (this.props.parents.mutter.gebiss === "komplette Schere") {
          dentures = "ciseaux complets";
        } else {
          dentures = "articulé en pince";
        }
    }
    return dentures;
  };
  getDenturesFather = () => {
    let dentures = "";
    switch (this.props.language) {
      case "de":
        if (this.props.parents.vater.gebiss === "schere") {
          dentures = "Schere";
        } else if (this.props.parents.vater.gebiss === "komplette Schere") {
          dentures = "komplette Schere";
        } else {
          dentures = "Zangengebiss";
        }
        break;
      case "en":
        if (this.props.parents.vater.gebiss === "schere") {
          dentures = "scissors";
        } else if (this.props.parents.vater.gebiss === "komplette Schere") {
          dentures = "complete scissors";
        } else {
          dentures = "pincer bite";
        }
        break;
      default:
        if (this.props.parents.vater.gebiss === "schere") {
          dentures = "ciseaux";
        } else if (this.props.parents.vater.gebiss === "komplette Schere") {
          dentures = "ciseaux complets";
        } else {
          dentures = "articulé en pince";
        }
    }
    return dentures;
  };

  getLabelHeight = () => {
    let lableHeight = "";
    switch (this.props.language) {
      case "de":
        lableHeight = "Grösse: ";
        break;
      case "en":
        lableHeight = "Height: ";
        break;
      default:
        lableHeight = "Taille: ";
    }
    return lableHeight;
  };

  getLinebreak = (x) => {
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

  getTextAusstellungen = () => {
    let txtExpositions = "";
    switch (this.props.language) {
      case "de":
        txtExpositions =
          "Internationale Rassehundeausstellung in Tarbes am 18.11.2018 \n Offene Klasse, Richter: Roger Barenne \n Bewertung: excellent, CACIB, CACS, Rassebeste";
        break;
      case "en":
        txtExpositions =
          "International Dog Show in Tarbes on 18.11.2018 \n Open class, judge: Roger Barenne \n Ration: excellent, CACIB, CACS, Best of Breed";
        break;
      default:
        txtExpositions =
          "Exposition canine à Tarbes le 18.11.2018 \n Clase ouverte, juge: Roger Barenne \n Classement: excellent, CACIB, CACS, Meilleur de race";
    }
    return txtExpositions;
  };

  getButtonPedigree = () => {
    let pedigree = "";
    switch (this.props.language) {
      case "de":
        pedigree = "Ahnentafel";
        break;
      case "en":
        pedigree = "Pedigree";
        break;
      default:
        pedigree = "Pedigree";
    }
    return pedigree;
  };
  getAlc = () => {
    let alc = "";
    switch (this.props.language) {
      case "de":
        alc = "AVK  ";
        break;
      case "en":
        alc = "ALC  ";
        break;
      default:
        alc = "TAD  ";
    }
    return alc;
  };

  getIc = () => {
    let ic = "";
    switch (this.props.language) {
      case "de":
        ic = "IK  ";
        break;
      case "en":
        ic = "IC  ";
        break;
      default:
        ic = "COI  ";
    }
    return ic;
  };
  render() {
    if (!this.state.parents) {
      return (
        <div className={styles.container}>
          <div className={styles.mainHeaderContainer}>
            <div>
              <h1 className={styles.mainHeader}>
                {this.getButtonPedigree()} {this.state.parentName}
              </h1>
            </div>
            <div className={styles.headerButtonBack}>
              <button onClick={this.getParentsBack}>
                {this.getButtonLabelBack()}
              </button>
            </div>
          </div>
          <Carousel dynamicHeight={true} showArrows={true}>{this.state.parent}</Carousel>
        </div>
      );
    } else if (this.state.parents) {
      return (
        <div className={styles.container}>
          <div className={styles.mainHeaderContainer}>
            <div>
              <h1 className={styles.mainHeader}>
                {this.props.parents.mutter.name} x{" "}
                {this.props.parents.vater.name}
              </h1>
            </div>
            <div className={styles.headerButtonBack}>
              <button onClick={this.props.defaultSwitch}>{this.getButtonLabelBack()}</button>
            </div>
          </div>
          <div className={styles.containerdog1}>
            <div className={styles.dogbox1}>
              <h3 className={styles.header}>
                {this.props.parents.mutter.parent_full_name}
              </h3>
              <h4 className={styles.dob}>
                {this.props.parents.mutter.parent_date_of_birth}
              </h4>
              <div className={styles.img}>
                <img
                  className={styles.imgRight}
                  src={this.props.parents.dob.mother_image.data.full_url}
                  alt={this.props.parents.mutter.name}
                ></img>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>Von Willebrand/ENM: </td>
                    <td>
                      {this.getWillebrand()}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {this.getLabelPatella()}
                    </td>
                    <td>
                      {this.getPatella()}
                    </td>
                  </tr>
                  <tr>
                    <td>{this.getLabelEyes()}</td>
                    <td>
                      {this.getEyes()}
                    </td>
                  </tr>
                  <tr>
                    <td>{this.getLabelDentures()}</td>
                    <td>
                      {this.getDenturesMother()}
                    </td>
                  </tr>
                  <tr>
                    <td>{this.getLabelHeight()}</td>
                    <td>{this.props.parents.mutter.height}</td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.expositions}>
                <button onClick={this.showPedigreeMother}>
                  {this.getButtonPedigree()}
                </button>
                <div>{this.getLinebreak(this.getTextAusstellungen())}</div>
              </div>
            </div>
            <div className={styles.dogbox2}>
              <h3 className={styles.header}>
                {this.props.parents.vater.parent_full_name}
              </h3>
              <h4 className={styles.dob}>
                {this.props.parents.vater.parent_date_of_birth}
              </h4>
              <div className={styles.img}>
                <img
                  className={styles.imgRight}
                  src={this.props.parents.dob.father_image.data.full_url}
                  alt={this.props.parents.vater.name}
                ></img>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>Von Willebrand/ENM: </td>
                    <td>
                      {this.getWillebrand()}
                    </td>
                  </tr>
                  <tr>
                    <td>{this.getLabelPatella()}</td>
                    <td>
                      {this.getPatella()}
                    </td>
                  </tr>
                  <tr>
                    <td>{this.getLabelEyes()}</td>
                    <td>
                      {this.getEyes()}
                    </td>
                  </tr>
                  <tr>
                    <td>{this.getLabelDentures()}</td>
                    <td>
                      {this.getDenturesFather()}
                    </td>
                  </tr>
                  <tr>
                    <td>{this.getLabelHeight()}</td>
                    <td>{this.props.parents.vater.height}</td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.expositions}>
                <button onClick={this.showPedigreeFather}>
                  {this.getButtonPedigree()}
                </button>
                <p>{this.props.parents.vater.expositions}</p>
              </div>
            </div>
          </div>
          <div className={styles.coefficient}>
            <div>
              {this.getAlc()}
              {this.props.parents.dob.alc}
            </div>
            <div>
              {this.getIc()}
              {this.props.parents.dob.ic}
            </div>
          </div>
          <div className={styles.showPedigreeImage}>
            <img
              style={{ display: this.state.showMother }}
              src={this.props.parents.mutter.pedigree.data.full_url}
              alt={"Pedigree"}
              onClick={this.showPedigreeMother}
            />
            <img
              style={{ display: this.state.showFather }}
              src={this.props.parents.vater.pedigree.data.full_url}
              alt={"Pedigree"}
              onClick={this.showPedigreeFather}
            />
          </div>
        </div>
      );
    }
  }
}

export default Parents;
