import React, { Component } from "react";
import NewsPuppies from "../News/NewsPuppies/NewsPuppies";
import Spinner from "./../Spinner/Spinner";
import DogsDOB from "./DogsDOB";
import styles from "./WelpenElement.module.css";
import Parents from "../Parents/Parents";

class WelpenElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      welpen: [],
      loaded: true,
      showParents: false,
      // welpenImages:[],
      welpenImagesShow: false,
      breedingShow: false,
      showLitter: false,
      parents:'',
      litterDOB:''
    };
  }
  parentsSwitch = (element) => {
    console.log(element)
    console.log(this.state.showParents)
    this.setState({ showParents: !this.state.showParents, parents:element });
  };

  welpenSwitch = (element) => {
    console.log(element)
    console.log(this.state.showLitter)
    this.setState({ showLitter: !this.state.showLitter, litterDOB:element });
  };


  elements = () => {
    let welpen = [];
    this.props.elements.forEach((element) => {
      console.log(element)
      if (this.props.language === "en") {
        let part = (
          <div key={element.id}>
            <div className={styles.welpenCard}>
              <div className={styles.dataContainer}>
                <h3 className={styles.header}>
                  {element.translations[0].title}
                </h3>
                {element.translations[0].uebersetzung}{" "}
                <div>
                  <button onClick={() => this.parentsSwitch(element)}>
                    The parents
                  </button>
                  <button onClick={() => this.welpenSwitch(element.dob.dateofbirth)}>
                    Week 1 to 9
                  </button>
                  <button onClick={() => this.breedingSwitch()}>
                    In the new home
                  </button>
                </div>
              </div>
              <div className={styles.imageContainer}>
                <img
                  src={element.foto.data.thumbnails[3].url}
                  alt={element.name}
                ></img> 
              </div>
            </div>
            {/* <div style={{ display: this.state.welpenImagesShow }}>
              <NewsPuppies dob={element.dob.dateofbirth} />
            </div>
            <div style={{ display: this.state.breedingShow }}>
              <DogsDOB dob={element.dob.dateofbirth} />
            </div>  */}
          </div>
        );
        welpen.push(part);
      } else if (this.props.language === "de") {
        let part = (
          <div key={element.id}>
            <div>{element.translations[1].title}</div>
            <div>{element.translations[1].uebersetzung}</div>
            <img
              src={element.foto.data.thumbnails[3].url}
              alt={element.name}
            ></img>
            <div>
              <button onClick={() => this.parentsSwitch(element)}>
                Die Eltern
              </button>
              <button onClick={() => this.welpenSwitch()}>Woche 1 bis 9</button>
              <button onClick={() => this.breedingSwitch()}>
                Im neuen Zuhause
              </button>
              <div>
                <p></p>
              </div>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <div style={{ display: this.state.welpenImagesShow }}>
              <NewsPuppies dob={element.dob.dateofbirth} />
            </div>
            <div style={{ display: this.state.breedingShow }}>
              <DogsDOB dob={element.dob.dateofbirth} />
            </div>
          </div>
        );
        welpen.push(part);
      } else if (this.props.language === "fr") {
        let part = (
          <div key={element.id}>
            <div>{element.translations[2].title}</div>
            <div>{element.translations[2].uebersetzung}</div>
            <img
              src={element.foto.data.thumbnails[3].url}
              alt={element.name}
            ></img>
            <div>
              <button onClick={() => this.parentsSwitch(element)}>
                Les parents
              </button>
              <button onClick={() => this.welpenSwitch()}>Semaine 1 à 9</button>
              <button onClick={() => this.breedingSwitch()}>
                Dans le nouveau foyer
              </button>
            </div>
            <div style={{ display: this.state.welpenImagesShow }}>
              <NewsPuppies dob={element.dob.dateofbirth} />
            </div>
            <div style={{ display: this.state.breedingShow }}>
              <DogsDOB dob={element.dob.dateofbirth} />
            </div>
          </div>
        );
        welpen.push(part);
      }
    });
    return welpen;
  };
  render() {

    if (!this.state.loaded) {return (<div><Spinner /></div>);}
    if (this.state.loaded && (!this.state.showParents) && (!this.state.showLitter)) {return (<div className={styles.container}><h1 className={styles.mainHeader}>Litters</h1><div>{this.elements()}</div></div>);}
    if ((this.state.loaded) && (this.state.showParents) && (!this.state.showLitter)) {return (<div><Parents parents={this.state.parents} /></div>);}
    if ((this.state.loaded) && (!this.state.showParents) && (this.state.showLitter)) {return (<div><NewsPuppies dob={this.state.litterDOB} /></div>);}

  }
}

export default WelpenElement;
