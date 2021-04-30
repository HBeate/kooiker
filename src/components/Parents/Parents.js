import React, { Component } from "react";
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
      
    };
  }

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
                      <td>{this.props.parents.mutter.willebrand}</td>
                    </tr>
                    <tr>
                      <td>Luxation de la rotule: </td>
                      <td>{this.props.parents.mutter.petella}</td>
                    </tr>
                    <tr>
                      <td>Tares oculaires: </td>
                      <td>{this.props.parents.mutter.eyes}</td>
                    </tr>
                    <tr>
                      <td>Dentition: </td>
                      <td>{this.props.parents.mutter.dentures}</td>
                    </tr>
                    <tr>
                      <td>Taille: </td>
                      <td>{this.props.parents.mutter.height}</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.expositions}>
                  <p>{this.props.parents.mutter.expositions}</p>
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
                      <td>{this.props.parents.vater.willebrand}</td>
                    </tr>
                    <tr>
                      <td>Luxation de la rotule: </td>
                      <td>{this.props.parents.vater.petella}</td>
                    </tr>
                    <tr>
                      <td>Tares oculaires: </td>
                      <td>{this.props.parents.vater.eyes}</td>
                    </tr>
                    <tr>
                      <td>Dentition: </td>
                      <td>{this.props.parents.vater.dentures}</td>
                    </tr>
                    <tr>
                      <td>Taille: </td>
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
            <div>ALC:{this.props.parents.dob.alc}</div>
            <div>IC:{this.props.parents.dob.ic}</div>
            </div>
          </div>
      
      );
    }
  }

export default Parents;



