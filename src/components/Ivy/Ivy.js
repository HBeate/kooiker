import React, { Component } from "react";
import Constants from "../../helper/Constants";
import styles from "./Ivy.module.css";
import ivyImg from "../Ivy/ivy.jpg";
import ResponsiveGallery from "react-responsive-gallery";
// import { GiJumpingDog } from "react-icons/gi";
import Spinner from "./../Spinner/Spinner";
import {Helmet} from "react-helmet";

class Ivy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "none",
      dog: "",
      showGallery: "none",
      showExpositions: "none",
      images: [],
      loaded: false,
      expositions: [],
      one: '',
      two:'',
      three:'',
      four:'',
      five:''
    };
  }
  componentDidMount() {
    fetch(Constants.ivy)
      .then((resp) => resp.json())
      .then((result) => {
        let ivy = result.data[0];
        let pedigree = result.data[0].pedigree.data.full_url;
        let images = [];
        result.data[0].images.forEach((element) => {
          if(element.directus_files_id.type==='image/jpeg'){
          images.push({
            src: element.directus_files_id.data.thumbnails[5].url,
          });
        }
        });
        this.setState({
          images: images,
          dog: ivy,
          pedigree: pedigree,
          loaded: true,
        });
      });
    fetch(Constants.expositions)
      .then((resp) => resp.json())
      .then((result) => {
        let expositions = result.data[0];
        this.setState({
          expositions: expositions,
        });
      });
  }


  showPedigree = () => {
    if (this.state.show === "none") {
      this.setState({
        show: "flex",
        showGallery: "none",
        showExpositions: "none",
      });
    } else {
      this.setState({
        show: "none",
        showGallery: "none",
        showExpositions: "none",
      });
    }
    setTimeout(() => {
      if (this.state.show){ window.scrollTo({top: 700, left: 0, behavior: 'smooth' }); }
      else if (!this.state.show) { window.scrollTo({top: 0, left: 0, behavior: 'smooth' }); }
    }, 1000);
  };

  showImages = () => {
    if (this.state.showGallery === "none") {
      this.setState({
        showGallery: "flex",
        show: "none",
        showExpositions: "none",
      });
    } else {
      this.setState({
        showGallery: "none",
        show: "none",
        showExpositions: "none",
      });
    }
    setTimeout(() => {
      if (this.state.showGallery){ window.scrollTo({top: 700, left: 0, behavior: 'smooth' }); }
      else if (!this.state.showGallery) { window.scrollTo({top: 0, left: 0, behavior: 'smooth' }); }
    }, 1000);
  };

  showExpositions = () => {
    if (this.state.showExpositions === "none") {
      this.setState({
        showGallery: "none",
        show: "none",
        showExpositions: "flex",
      });
    } else {
      this.setState({
        showGallery: "none",
        show: "none",
        showExpositions: "none",
      });
    }
    setTimeout(() => {
      if (this.state.showExpositions){ window.scrollTo({top: 700, left: 0, behavior: 'smooth' }); }
      else if (!this.state.showExpositions)  { window.scrollTo({top: 0, left: 0, behavior: 'smooth' }); }
    }, 1000);
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
   getTwo = () => {
    let two = "";
    switch (this.props.language) {
      case "de":
        two = "Patella: ";
        break;
      case "en":
        two = "Patella: ";
        break;
      default:
        two = "Luxation de la rotule: ";
    }
    return two;
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
  getThree = () => {
    let three = "";
    switch (this.props.language) {
      case "de":
        three = "Augen: ";
        break;
      case "en":
        three = "Eyes: ";
        break;
      default:
        three = "Tares oculaires: ";
    }
    return three;
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
  getFour = () => {
    let four = "";
    switch (this.props.language) {
      case "de":
        four = "Gebiss: ";
        break;
      case "en":
        four = "Dentures: ";
        break;
      default:
        four = "Dentition: ";
    }
    return four;
  };
  getFive = () => {
    let five = "";
    switch (this.props.language) {
      case "de":
        five = "Grösse: ";
        break;
      case "en":
        five = "Height: ";
        break;
      default:
        five = "Taille: ";
    }
    return five;
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
  getButtonGallery = () => {
    let gallery = "";
    switch (this.props.language) {
      case "de":
        gallery = "Galerie";
        break;
      case "en":
        gallery = "Gallery";
        break;
      default:
        gallery = "Galerie";
    }
    return gallery;
 
  };

  getButtonExpositions = () => {
    let expositions = "";
    switch (this.props.language) {
      case "de":
        expositions = "Ausstellungen";
        break;
      case "en":
        expositions = "Expositions";
        break;
      default:
        expositions = "Expositions";
    }
    return expositions;
  };

  
  getDentures = () => {
    let dentures = "";
    switch (this.props.language) {
      case "de":
        if(this.state.dog.gebiss==='schere'){
          dentures = "Schere";
        } else if (this.state.dog.gebiss==='komplette Schere'){
          dentures = "komplette Schere";
        }else{
          dentures = "Zangengebiss";
        }
        break;
      case "en":
        if(this.state.dog.gebiss==='schere'){
          dentures = "scissors";
        } else if (this.state.dog.gebiss==='komplette Schere'){
          dentures = "complete scissors";
        }else{
          dentures = "pincer bite";
        }
        break;
      default:
        if(this.state.dog.gebiss==='schere'){
          dentures = "ciseaux";
        } else if (this.state.dog.gebiss==='komplette Schere'){
          dentures = "ciseaux complets";
        }else{
          dentures = "articulé en pince";
        }
    }
    return dentures;
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
        txtExpositions = "Internationale Rassehundeausstellung in Tarbes am 18.11.2018 \n Offene Klasse, Richter: Roger Barenne \n Bewertung: excellent, CACIB, CACS, Rassebeste";
        break;
      case "en":
        txtExpositions = "International Dog Show in Tarbes on 18.11.2018  \n Open class, judge: Roger Barenne \n Ration: excellent, CACIB, CACS, Best of Breed";
        break;
      default:
        txtExpositions = "Exposition canine à Tarbes le 18.11.2018 \n Clase ouverte, juge: Roger Barenne \n Classement: excellent, CACIB, CACS, Meilleur de race";
    }
    return txtExpositions;
  };
  getText=()=>{
    if(this.props.language==='en'){
      return(          <div>
        {" "}
        <p className={styles.mainText}>
          Even though we had dogs (Leonberger and Tervueren) and two cats, I
          had a growing feeling that I needed a new task. I’m retired and I
          have always been very fond of dogs. Since we have plenty of space
          and time I decided to start breeding them. I wanted it to be a
          special breed, one that was not too common. After some
          investigation I came upon the Nederlandse Kooikerhondje.
          Character, appearance and size of this breed was immediately
          appealing to me. Since my husband agreed to fully support me the
          way forward was clear.
        </p>
        <p className={styles.mainText}>
          After some efforts I discovered the breeding site of Beate van
          Schelve/Wolfgang Brüner which was very attractive in all respects.
          We contacted the owners and after giving them some insight into
          our personal situation and living conditions we were added to the
          waiting list. Finally, after one year we were taken into account
          for the I-litter. At the beginning of Juli 2017 a good friend of
          mine and I drove 14 hours to pick up the puppy. The drive was long
          and quite tiring but it was definitely worth it. We are all -
          people as well as animials - very happy with our new family
          member.
        </p>
      </div>)
    }
    else if(this.props.language==='de'){
       return(          <div>
        {" "}
        <p className={styles.mainText}>
        Trotz unserer Hunde (Leonberger und Tervueren) und zwei Katzen hatte ich je länger je mehr das Gefühl, mein beschauliches Pensionistendasein mit einer neuen Aufgabe aufwerten zu müssen. Da ich zeitlebens schon immer sehr hundeaffin war, Platz und Zeit genug vorhanden sind, lag der Aufbau einer kleinen Zucht nahe. Es sollte allerdings etwas Besonderes sein, sprich eine seltene Rasse. Nach längeren Recherchen stiess ich auf das Nederlandse Kooikerhondje. Charakter, Aussehen und Grösse dieser Rasse haben mich sofort angesprochen. Nachdem mir mein Mann seine uneingeschränkte Unterstützung zusagte, war der weitere Weg klar.
        </p>
        <p className={styles.mainText}>
        Nach längeren Bemühungen stiess ich auf die Zuchtstätte von Beate van Schelve/Wolfgang Brüner, die mir in jeder Hinsicht sehr zusagte. Nach Kontaktaufnahme und Offenlegung unserer persönlichen und wohnlichen Situation wurde ich auf die Warteliste genommen. Endlich - nach Ablauf eines Jahres - wurde ich beim I-Wurf berücksichtigt. Mit einer guten Freundin machte ich mich Anfang Juli 2017 auf die 14-stündige Autofahrt, um die kleine Fellnase abzuholen. Der Weg war lang und ziemlich beschwerlich, hat sich aber auf jeden Fall gelohnt; wir alle - Mensch und Tier - sind mit dem Nachwuchs sehr glücklich!
        </p>
      </div>)
    }
    else {return(<div>
      {" "}
      <p className={styles.mainText}>
      Malgré nos chiens (Leonberger et Tervueren) et deux chats, j’ai eu le sentiment que ma retraite contemplative serait enrichie par une nouvelle tâche. Comme j’ai toujours eu beaucoup d’intérêt pour les chiens, que l’espace et le temps sont suffisants, la mise en place d’un élevage canin était une évidence. Mais cela devrait être quelque chose de spécial, une race rare. Après quelques recherches, je suis tombé sur le Nederlandse Kooikerhondje. Le caractère, l’apparence et la taille de cette race m’ont immédiatement séduite.
      </p>
      <p className={styles.mainText}>
      Après de longues recherches, je suis tombée sur l’élevage Beate van Schelve/Wolfgang Brüner en Allemagne, qui m’a convenu à tous les égards. Après avoir pris contact et donné des informations sur notre situation personnelle et sur notre environnement de vie, j’ai été mise sur la liste d’attente. Finalement - après un an - j’ai été retenue pour la portée I. Début juillet 2017, je me suis mise en route avec une amie pour 14 heures de route pour aller chercher la petite boule de poils. Le voyage a été long et ardu, mais le jeu en valait la chandelle; nous sommes tous - humains et animaux - très heureux de la nouvelle progénitur!      </p>
    </div>)}
        
    }
  render() {
    if (!this.state.loaded) {
      return(<Spinner/>)
    }
    if (this.state.loaded) {
      return (
        <div className={styles.container} id='start'>
                    <Helmet> 
          <title>Ivy | Kooikerhondje</title>
          <meta
            name="description"
            content="Kooikerhondje de la bande de rigolos"
          />
          <meta
            name="keywords"
            content="Kooikerhondje, Kooiker, breeding, puppies, France"
          />
          <link rel="canonical" href="https://kooiker-fr.com/ivy" />
          </Helmet>
          <div>
            <h1 className={styles.mainHeader}>{this.state.dog.name}</h1>
          </div>
          <div>
            <div className={styles.card}>
              <div className={styles.content}>
                <div>
                  <h3 className={styles.header}>
                    {this.state.dog.parent_full_name}
                  </h3>
                  <h4 className={styles.born}>
                    {this.state.dog.parent_date_of_birth}
                  </h4>
                  <table>
                    <tbody>
                      <tr>
                        <td>Von Willebrand/ENM: </td>
                        <td>{this.getWillebrand()}{/* {this.state.dog.willebrand} */}</td>
                      </tr>
                      <tr>
                        <td>{this.getTwo()} </td>
                        <td>{this.getPatella()}{/* {this.state.dog.petella} */}</td>
                      </tr>
                      <tr>
                        <td>{this.getThree()} </td>
                        <td>{this.getEyes()}{/* {this.state.dog.eyes} */}</td>
                      </tr>
                      <tr>
                        <td>{this.getFour()} </td>
                        {/* <td>{this.state.dog.dentures}</td> */}
                         {/* <td>{this.state.dog.gebiss}</td> */}
                         <td>{this.getDentures()}</td>
                      </tr>
                      <tr>
                        <td>{this.getFive()} </td>
                        <td>{this.state.dog.height}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className={styles.expositions}>
                                {this.getLinebreak(this.getTextAusstellungen())}
{/*                     <p>{this.getTextAusstellungen()}{ {this.state.dog.expositions} }</p>
 */}                  </div>
                </div>
              </div>

              <div className={styles.media}>
                <img
                  className={styles.imgRight}
                  src={ivyImg}
                  alt={"card"}
                ></img>
              </div>
            </div>
          </div>
          {this.getText()}

          <div className={styles.ivyButtonPage}>
            <button onClick={this.showPedigree}>{this.getButtonPedigree()}</button>

            <button onClick={this.showImages}>{this.getButtonGallery()}</button>

            <button onClick={this.showExpositions}>{this.getButtonExpositions(this.props.language)}</button>
         
          </div>

          <div className={styles.showPedigreeImage}>
            <img
              style={{ display: this.state.show }}
              src={this.state.pedigree}
              alt={"Ivy"}
              onClick={this.showPedigree}
            />
          </div>
          <div style={{ display: this.state.showGallery }}>
            <div className={styles.showGalleryIvyPage}>
              <ResponsiveGallery
                images={this.state.images}
                useLightBox={true}
              />
            </div>
          </div>
          <div className={styles.expositionsIvyPage}>

            <div style={{ display: this.state.showExpositions }}>
            <div className={styles.txtExpositions}>{this.getLinebreak(this.getTextAusstellungen())} </div>

{/*             {this.getTextAusstellungen()} */}
{/* 
              {this.state.expositions.text} */}
            </div>
            <div className={styles.expositionsIvyPageImage}>
              <img
                style={{ display: this.state.showExpositions }}
                src={
                  this.state.expositions.certificates[0].directus_files_id.data
                    .thumbnails[2].url
                }
                alt={
                  this.state.expositions.certificates[0].directus_files_id.title
                }
                
              />
            
              <img
                style={{ display: this.state.showExpositions }}
                src={
                  this.state.expositions.certificates[1].directus_files_id.data
                    .thumbnails[2].url
                }
                alt={
                  this.state.expositions.certificates[1].directus_files_id.title
                }
                
              />
              <img
                style={{ display: this.state.showExpositions }}
                src={
                  this.state.expositions.certificates[2].directus_files_id.data
                    .thumbnails[2].url
                }
                alt={
                  this.state.expositions.certificates[2].directus_files_id.title
                }
                
              />
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Ivy;
