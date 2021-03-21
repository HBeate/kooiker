import React, { Component } from "react";
import Constants from "../../helper/Constants";
import styles from "./Ivy.module.css";
import ivyImg from "../Ivy/ivy.jpg";

class Ivy extends Component {
  constructor(props) {
    super(props);
    this.state = {

      parent_full_name: "",
      parent_date_of_birth: "",
      willebrand: "",
      petella: "",
      eyes: "",
      dentures: "",
      height: "",
      pedigree: "",
      images: [],
      parent_image: "",
      tests: "Tests:",
      show: "none",
      dog: "",
      showGallery: false,

      dog:'',
      pedigree:''

    };
  }
  componentDidMount() {
    fetch(Constants.ivy)
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result.data[0]);
        let ivy = result.data[0];
        let pedigree = result.data[0].pedigree.data.full_url;
        this.setState({

          dog:ivy,
          pedigree:pedigree

        });
      });
  }

  showPedigree = () => {
    if (this.state.show === "none") {
      this.setState({
        show: "flex",
      });
    } else {
      this.setState({
        show: "none",
      });
    }
  };

  closeGallery = () => {
    this.setState({
        showGallery: false,
        showSubNav: false
    })
}


  render() {
    return (

      <div>
        <DogDetailCard dog={this.state.dog} pedigree={this.state.pedigree}/>

      </div>
    ); */
      <div className={styles.container}>
        <div>
          <h1 className={styles.mainHeader}>{this.state.dog.name}</h1>
        </div>
        <div className={styles.detailCard}>


          <div className={styles.content}>
            <div className={styles.dataContainer}>
              <h3 className={styles.header}>
                {this.state.dog.parent_full_name}
              </h3>
              <h4 className={styles.born}>
                {this.state.dog.parent_date_of_birth}
              </h4>

              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>Von Willebrand/ENM: </td>
                      <td>{this.state.dog.willebrand}</td>
                    </tr>
                    <tr>
                      <td>Luxation de la rotule: </td>
                      <td>{this.state.dog.petella}</td>
                    </tr>
                    <tr>
                      <td>Tares oculaires: </td>
                      <td>{this.state.dog.eyes}</td>
                    </tr>
                    <tr>
                      <td>Dentition: </td>
                      <td>{this.state.dog.dentures}</td>
                    </tr>
                    <tr>
                      <td>Taille: </td>
                      <td>{this.state.dog.height}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.expositions}>
                <p>{this.state.dog.expositions}</p>
              </div>

            </div>
            <div className={styles.imageContainer}>
              <img className={styles.imgRight} src={ivyImg} alt={"card"}></img>
            </div>
          </div>
          <p className={styles.mainText}>Even though we had dogs (Leonberger and Tervueren) and two cats, I had a growing feeling that I needed a new task. I’m retired and I have always been very fond of dogs. Since we have plenty of space and time I decided to start breeding them. I wanted it to be a special breed, one that was not too common. After some investigation I came upon the Nederlandse Kooikerhondje. Character, appearance and size of this breed was immediately appealing to me. Since my husband agreed to fully support me the way forward was clear.</p>

<p className={styles.mainText}>After some efforts I discovered the breeding site of Beate van Schelve/Wolfgang Brüner which was very attractive in all respects. We contacted the owners and after giving them some insight into our personal situation and living conditions we were added to the waiting list. Finally, after one year we were taken into account for the I-litter. At the beginning of Juli 2017 a good friend of mine and I drove 14 hours to pick up the puppy. The drive was long and quite tiring but it was definitely worth it. We are all - people as well as animials - very happy with our new family member.</p>
<div>
                <button onClick={this.showPedigree}>Ahnentafel</button>
              </div>
              <div>
                <button>Galerie</button>
              </div>
              <div>
                <button>Ausstellungen</button>
                
              </div>
        </div>{" "}
        <img
          style={{ display: this.state.show }}
          src={/* this.props.dog.pedigree.data.full_url */ ivyImg}
          // src={this.props.dog.pedigree.data.thumbnails[5].url}
          alt={"Ivy"} onClick={this.showPedigree}
        />
      </div>
    );
  }
}

export default Ivy;

