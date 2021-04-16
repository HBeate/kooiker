import React, { Component } from "react";
import NewsPuppies from "../News/NewsPuppies/NewsPuppies";
import Spinner from "./../Spinner/Spinner";
import styles from "./WelpenElement.module.css";
import Parents from "../Parents/Parents";
import Constants from '../../helper/Constants'
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
      parents:'',
      litterDOB:'',
      breedings:[],
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
        this.setState({
          breedings: breedings,
        });
      });
  }

  parentsSwitchLocal = (element) => {
    this.setState({parents:element });
  this.props.parentsSwitch()
  };

  welpenSwitchLocal = (element) => {
    this.setState({ litterDOB:element });
    this.props.welpenSwitch()
  };

  breedingSwitchLocal = (element) => {
    this.setState({ litterDOB:element});
    this.props.breedingSwitch()
  };



  elements = () => {
    let welpen = [];
    this.props.elements.forEach((element) => {
      if (this.props.language === "en") {
        let part = (
          <div key={element.id}>
            <div className={styles.welpenCard}>
              <div className={styles.dataContainer}>
                <h3 className={styles.header}>{element.translations[0].title}</h3>
                {element.translations[0].uebersetzung}{" "}
                <div>
                  <button onClick={() => this.parentsSwitchLocal(element)}>The parents</button>
                  <button onClick={() => this.welpenSwitchLocal(element.dob.dateofbirth)}> Week 1 to 9</button>
                  <button onClick={() => this.breedingSwitchLocal(element.dob.dateofbirth)}>In the new home</button>
                </div>
              </div>
              <div className={styles.imageContainer}>
                <img src={element.foto.data.thumbnails[3].url} alt={element.name} ></img> 
              </div>
            </div>
          </div>
        );
        welpen.push(part);
      } else if (this.props.language === "de") {
        let part = (
          <div key={element.id}>
            <div>{element.translations[1].title}</div>
            <div>{element.translations[1].uebersetzung}</div>
            <img  src={element.foto.data.thumbnails[3].url} alt={element.name} ></img>
            <div>
              <button onClick={() => this.parentsSwitchLocal(element)}>Die Eltern</button>
              <button onClick={() => this.welpenSwitchLocal(element.dob.dateofbirth)}>Woche 1 bis 9 </button>
              <button onClick={() => this.breedingSwitchLocal(element.dob.dateofbirth)}>Im neuen Zuhause</button>
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
            <button onClick={() => this.parentsSwitchLocal(element)}>
            Les parents
                  </button>
                  <button onClick={() => this.welpenSwitchLocal(element.dob.dateofbirth)}>
                  Semaine 1 à 9
                  </button>
                  <button onClick={() => this.breedingSwitchLocal(element.dob.dateofbirth)}>
                  Dans le nouveau foyer
                  </button>
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
    if (this.state.loaded && (!this.props.showParents) && (!this.props.showLitter) && (!this.props.showDogs)) {return (<div className={styles.container}><h1 className={styles.mainHeader}>Litters</h1><div>{this.elements()}</div></div>);}
    if ((this.state.loaded) && (this.props.showParents) && (!this.props.showLitter) && (!this.props.showDogs)) {return (<div><Parents parents={this.state.parents} /></div>);}
    if ((this.state.loaded) && (!this.props.showParents) && (this.props.showLitter) && (!this.props.showDogs)) {return (<div><NewsPuppies dob={this.state.litterDOB} /></div>);}
    if ((this.state.loaded) && (!this.props.showParents) && (!this.props.showLitter) && (this.props.showDogs)) {return (<div><BreedingCardContainer breedings={this.state.breedings} dob={this.state.litterDOB}/></div>);}

  }
}

export default WelpenElement;
