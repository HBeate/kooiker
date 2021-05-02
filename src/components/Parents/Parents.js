import React, { Component } from "react";
/* import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider"; */
import styles from "./Parents.module.css";

class Parents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "none",
      dog: "",
      showGallery: "none",
      images: [],
      loaded: true,
      alc: "",
      ic: "",
    };
  }

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
        if(this.props.parents.mutter.gebiss==='schere'){
          dentures = "Schere";
        } else if (this.props.parents.mutter.gebiss==='komplette Schere'){
          dentures = "komplette Schere";
        }else{
          dentures = "Zangengebiss";
        }
        break;
      case "en":
        if(this.props.parents.mutter.gebiss==='schere'){
          dentures = "scissors";
        } else if (this.props.parents.mutter.gebiss==='komplette Schere'){
          dentures = "complete scissors";
        }else{
          dentures = "pincer bite";
        }
        break;
      default:
        if(this.props.parents.mutter.gebiss==='schere'){
          dentures = "ciseaux";
        } else if (this.props.parents.mutter.gebiss==='komplette Schere'){
          dentures = "ciseaux complets";
        }else{
          dentures = "articulé en pince";
        }
    }
    return dentures;
  }; 
  getDenturesFather = () => {
    let dentures = "";
    switch (this.props.language) {
      case "de":
        if(this.props.parents.vater.gebiss==='schere'){
          dentures = "Schere";
        } else if (this.props.parents.vater.gebiss==='komplette Schere'){
          dentures = "komplette Schere";
        }else{
          dentures = "Zangengebiss";
        }
        break;
      case "en":
        if(this.props.parents.vater.gebiss==='schere'){
          dentures = "scissors";
        } else if (this.props.parents.vater.gebiss==='komplette Schere'){
          dentures = "complete scissors";
        }else{
          dentures = "pincer bite";
        }
        break;
      default:
        if(this.props.parents.vater.gebiss==='schere'){
          dentures = "ciseaux";
        } else if (this.props.parents.vater.gebiss==='komplette Schere'){
          dentures = "ciseaux complets";
        }else{
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
    getTextAusstellungen = () => {
    let txtExpositions = "";
    switch (this.props.language) {
      case "de":
        txtExpositions = "Internationale Rassehundeausstellung in Tarbes am 18.11.2018 \n Offene Klasse, Richter: Roger Barenne \n Bewertung: excellent, CACIB, CACS, Rassebeste";
        break;
      case "en":
        txtExpositions = "International Dog Show in Tarbes on 18.11.2018 \n Open class Judge: Roger Barenne \n Ration: excellent, CACIB, CACS, Best of Breed";
        break;
      default:
        txtExpositions = "Exposition canine à Tarbes le 18.11.2018 \n Clase ouverte  Juge: Roger Barenne \n Classement: excellent, CACIB, CACS, Meilleur de race";
    }
    return txtExpositions;
  };

  getAlc = () => {
    let alc = "";
    switch (this.props.language) {
      case "de":
        alc = "Inzuchtgradkoeffizient ";
        break;
      case "en":
        alc = "ALC ";
        break;
      default:
        alc = "Le CS est de ";
    }
    return alc;
  };

  getIc = () => {
    let ic = "";
    switch (this.props.language) {
      case "de":
        ic = "Ahnenverlust ";
        break;
      case "en":
        ic = "IC ";
        break;
      default:
        ic = "L'indice d'implexe est de ";
    }
    return ic;
  };
  render() {
      return (
        <div className={styles.container}>
          <div className={styles.mainHeaderContainer}>
            <h1 className={styles.mainHeader}>
              {this.props.parents.mutter.name} x {this.props.parents.vater.name}
            </h1>
            <button onClick={this.props.defaultSwitch}>Back</button>
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
                    // src={this.props.parents.mutter.parent_image.data.full_url}
                    src={this.props.parents.dob.mother_image.data.full_url}
                    alt={this.props.parents.mutter.name}
                  ></img>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td>Von Willebrand/ENM: </td>
                      <td>{this.getWillebrand()}{/* {this.props.parents.mutter.willebrand} */}</td>
                    </tr>
                    <tr>
                      <td>{this.getLabelPatella()}{/* Luxation de la rotule:  */}</td>
                      <td>{this.getPatella()}{/* {this.props.parents.mutter.petella} */}</td>
                    </tr>
                    <tr>
                      <td>{this.getLabelEyes()}</td>
                      <td>{this.getEyes()}{/* {this.props.parents.mutter.eyes} */}</td>
                    </tr>
                    <tr>
                      <td>{this.getLabelDentures()}</td>
                      <td>{this.getDenturesMother()}{/* {this.props.parents.mutter.dentures} */}</td>
                    </tr>
                    <tr>
                      <td>{this.getLabelHeight()}</td>
                      <td>{this.props.parents.mutter.height}</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.expositions}>
                  <div>{this.getTextAusstellungen()}</div>
                   {/* <p>{this.props.parents.mutter.expositions}</p>  */}
                </div>
              </div>
              <div className={styles.dogbox2}>
                <h3 className={styles.header}>{this.props.parents.vater.parent_full_name}</h3>
                <h4 className={styles.dob}>{this.props.parents.vater.parent_date_of_birth}</h4>
                <div className={styles.img}>
                  <img
                    className={styles.imgRight}
                    // src={this.props.parents.vater.parent_image.data.full_url}
                    src={this.props.parents.dob.father_image.data.full_url}
                    alt={this.props.parents.vater.name}
                  ></img>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td>Von Willebrand/ENM: </td>
                      <td>{this.getWillebrand()}{/* {this.props.parents.vater.willebrand} */}</td>
                    </tr>
                    <tr>
                      <td>{this.getLabelPatella()}</td>
                      <td>{this.getPatella()}{/* {this.props.parents.vater.petella} */}</td>
                    </tr>
                    <tr>
                      <td>{this.getLabelEyes()}</td>
                      <td>{this.getEyes()}{/* {this.props.parents.vater.eyes} */}</td>
                    </tr>
                    <tr>
                      <td>{this.getLabelDentures()}</td>
                      <td>{this.getDenturesFather()}{/* {this.props.parents.vater.dentures} */}</td>
                    </tr>
                    <tr>
                      <td>{this.getLabelHeight()}</td>
                      <td>{this.props.parents.vater.height}</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.expositions}>
                <p>{this.props.parents.vater.expositions}</p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className={styles.coefficient}>
            <div>{this.getAlc()}{this.props.parents.dob.alc}</div>
            <div>{this.getIc()}{this.props.parents.dob.ic}</div>
            </div>
          </div>
      
      );
    }
}

export default Parents;



