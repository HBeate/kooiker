import React, { Component } from "react";
import Constants from "../../../helper/Constants";
import ResponsiveGallery from 'react-responsive-gallery';
import styles from './NewsPuppies.module.css';
import  Spinner from '../../Spinner/Spinner'

class NewsPuppies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images1:[],
      images2:[],
      images3:[],
      images4:[],
      images5:[],
      images6:[],
      images7:[],
      images8:[],
      images9:[],
      images10:[],
      loaded: false,
    };
  }

  componentDidMount() {
    fetch(Constants.offspring)
      .then((resp) => resp.json())
      .then((result) => {
       let images1=[];
        let images2=[];
        let images3=[];
       let  images4=[];
        let images5=[];
        let images6=[];
        let images7=[];
       let  images8=[];
        let images9=[];
       let images10=[];
        result.data.forEach(element => {
          if(this.props.dob===element.dateofbirth.dateofbirth)
          switch (element.week) {
            case '1':
              element.images.forEach(element => {
                images1.push({ 
                  "src" : element.directus_files_id.data.full_url,
              });
              });
              break;
              case '2':
                element.images.forEach(element => {
                  images2.push({ 
                    "src" : element.directus_files_id.data.full_url,
                });
                });
                break;
                case '3':
                  element.images.forEach(element => {
                    images3.push({ 
                      "src" : element.directus_files_id.data.full_url,
                  });
                  });
                  break;
                  case '4':
                    element.images.forEach(element => {
                      images4.push({ 
                        "src" : element.directus_files_id.data.full_url,
                    });
                    });
                    break;
                    case '5':
                      element.images.forEach(element => {
                        images5.push({ 
                          "src" : element.directus_files_id.data.full_url,
                      });
                      });
                      break;
                      case '6':
                        element.images.forEach(element => {
                          images6.push({ 
                            "src" : element.directus_files_id.data.full_url,
                        });
                        });
                        break;
                        case '7':
                          element.images.forEach(element => {
                            images7.push({ 
                              "src" : element.directus_files_id.data.full_url,
                          });
                          });
                          break;
                          case '8':
                            element.images.forEach(element => {
                              images8.push({ 
                                "src" : element.directus_files_id.data.full_url,
                            });
                            });
                            break;
                            case '9':
                              element.images.forEach(element => {
                                images9.push({ 
                                  "src" : element.directus_files_id.data.full_url,
                              });
                              });
                              break;
                              default:
                                  element.images.forEach(element => {
                                    images10.push({ 
                                      "src" : element.directus_files_id.data.full_url,
                                  });
                                  });
                                  break;
          }
        });
        

        this.setState({
          images1:images1,
          images2:images2,
          images3:images3,
          images4:images4,
          images5:images5,
          images6:images6,
          images7:images7,
          images8:images8,
          images9:images9,
          images10:images10,
          loaded: true,
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      // return (
      //   <div style={{ textAlign: "center", color: "rgb(167, 69, 39)" }}>
      //     <GiJumpingDog size={"100vh"} />
      //   </div>
      // );
      return(<Spinner/>)
    }
    if (this.state.loaded) {
    return (
      <div className={styles.container}>
                  <div className={styles.mainHeaderContainer}>
            <h1 className={styles.mainHeader}>Week 1 to 9</h1>
            <button onClick={this.props.defaultSwitch}>Back</button>
          </div>
        <div className={styles.weeks}>
        <div><h3 >1ère semaine / 1st week / 1. Woche </h3></div>
        <ResponsiveGallery images={this.state.images1} useLightBox={true}/>
        <div><h3 className={styles.week}>2ème semaine / 2nd week / 2. Woche </h3></div>
        <ResponsiveGallery images={this.state.images2} useLightBox={true}/>
        <div><h3 className={styles.week}>3ème semaine / 3rd week / 3. Woche </h3></div>
        <ResponsiveGallery images={this.state.images3} useLightBox={true}/>
        <div><h3 className={styles.week}>4ème semaine / 4th week / 4. Woche </h3></div>
        <ResponsiveGallery images={this.state.images4} useLightBox={true}/>
        <div><h3 className={styles.week}>5ème semaine / 5th week / 5. Woche </h3></div>
        <ResponsiveGallery images={this.state.images5} useLightBox={true}/>
        <div><h3 className={styles.week}>6ème semaine / 6th week / 6. Woche </h3></div>
        <ResponsiveGallery images={this.state.images6} useLightBox={true}/>
        <div><h3 className={styles.week}>7ème semaine / 7th week / 7. Woche </h3></div>
        <ResponsiveGallery images={this.state.images7} useLightBox={true}/>
        <div><h3 className={styles.week}>8ème semaine / 8th week / 8. Woche </h3></div>
        <ResponsiveGallery images={this.state.images8} useLightBox={true}/>
        <div><h3 className={styles.week}>9ème semaine / 9th week / 9. Woche </h3></div>
        <ResponsiveGallery images={this.state.images9} useLightBox={true}/>
        <div><h3 className={styles.week}>Au revoir! / Bye, bye! / Tschüss! </h3></div>
        <ResponsiveGallery images={this.state.images10} useLightBox={true}/>
        </div>
      </div>
    );}
  }

}
export default NewsPuppies;