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
  getWeekHeading = () => {
    let weekHeading = "";
    switch (this.props.language) {
      case "de":
        weekHeading = "Woche 1 bis 9";
        break;
      case "en":
        weekHeading = "Weeks 1 to 9 ";
        break;
      default:
        weekHeading = "Semaine 1 à 9";
    }
    return weekHeading;
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
  getWeek1 = () => {
    let week1 = "";
    switch (this.props.language) {
      case "de":
        week1 = "1. Woche";
        break;
      case "en":
        week1 = "1st week";
        break;
      default:
        week1 = "1ère semaine";
    }
    return week1;
  };
  getWeek2 = () => {
    let week2 = "";
    switch (this.props.language) {
      case "de":
        week2 = "2. Woche";
        break;
      case "en":
        week2 = "2nd week";
        break;
      default:
        week2 = "2ème semaine";
    }
    return week2;
  };
  getWeek3 = () => {
    let week3 = "";
    switch (this.props.language) {
      case "de":
        week3 = "3. Woche";
        break;
      case "en":
        week3 = "3rd week";
        break;
      default:
        week3 = "3ème semaine";
    }
    return week3;
  };
  getWeek4 = () => {
    let week4 = "";
    switch (this.props.language) {
      case "de":
        week4 = "4. Woche";
        break;
      case "en":
        week4 = "4th week";
        break;
      default:
        week4 = "4ème semaine";
    }
    return week4;
  };
  getWeek5 = () => {
    let week5 = "";
    switch (this.props.language) {
      case "de":
        week5 = "5. Woche";
        break;
      case "en":
        week5 = "5th week";
        break;
      default:
        week5 = "5ème semaine";
    }
    return week5;
  };
  getWeek6 = () => {
    let week6 = "";
    switch (this.props.language) {
      case "de":
        week6 = "6. Woche";
        break;
      case "en":
        week6 = "6th week";
        break;
      default:
        week6 = "6ème semaine";
    }
    return week6;
  };
  getWeek7 = () => {
    let week7 = "";
    switch (this.props.language) {
      case "de":
        week7 = "7. Woche";
        break;
      case "en":
        week7 = "7th week";
        break;
      default:
        week7 = "7ème semaine";
    }
    return week7;
  };
  getWeek8 = () => {
    let week8 = "";
    switch (this.props.language) {
      case "de":
        week8 = "8. Woche";
        break;
      case "en":
        week8 = "8th week";
        break;
      default:
        week8 = "8ème semaine";
    }
    return week8;
  };
  getWeek9 = () => {
    let week9 = "";
    switch (this.props.language) {
      case "de":
        week9 = "9. Woche";
        break;
      case "en":
        week9 = "9th week";
        break;
      default:
        week9 = "9ème semaine";
    }
    return week9;
  };
  getWeek10 = () => {
    let week10 = "";
    switch (this.props.language) {
      case "de":
        week10 = "Tschüss!";
        break;
      case "en":
        week10 = "Bye, bye!";
        break;
      default:
        week10 = "Au revoir!";
    }
    return week10;
  };

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

/* 
                  "src" : element.directus_files_id.data.full_url, */
                  "src" : element.directus_files_id.data.thumbnails[2].url,

              });
              });
              break;
              case '2':
                element.images.forEach(element => {
                  images2.push({ 
/* 
                  "src" : element.directus_files_id.data.full_url, */
                  "src" : element.directus_files_id.data.thumbnails[2].url,
                });
                });
                break;
                case '3':
                  element.images.forEach(element => {
                    images3.push({ 
/* 
                  "src" : element.directus_files_id.data.full_url, */
                  "src" : element.directus_files_id.data.thumbnails[2].url,
                  });
                  });
                  break;
                  case '4':
                    element.images.forEach(element => {
                      images4.push({ 
/* 
                  "src" : element.directus_files_id.data.full_url, */
                  "src" : element.directus_files_id.data.thumbnails[2].url,
                    });
                    });
                    break;
                    case '5':
                      element.images.forEach(element => {
                        images5.push({ 
/* 
                  "src" : element.directus_files_id.data.full_url, */
                  "src" : element.directus_files_id.data.thumbnails[2].url,
                      });
                      });
                      break;
                      case '6':
                        element.images.forEach(element => {
                          images6.push({ 
/* 
                  "src" : element.directus_files_id.data.full_url, */
                  "src" : element.directus_files_id.data.thumbnails[2].url,
                        });
                        });
                        break;
                        case '7':
                          element.images.forEach(element => {
                            images7.push({ 
/* 
                  "src" : element.directus_files_id.data.full_url, */
                  "src" : element.directus_files_id.data.thumbnails[2].url,
                          });
                          });
                          break;
                          case '8':
                            element.images.forEach(element => {
                              images8.push({ 
 /* 
                  "src" : element.directus_files_id.data.full_url, */
                  "src" : element.directus_files_id.data.thumbnails[2].url,
                            });
                            });
                            break;
                            case '9':
                              element.images.forEach(element => {
                                images9.push({ 
/* 
                  "src" : element.directus_files_id.data.full_url, */
                  "src" : element.directus_files_id.data.thumbnails[2].url,
                              });
                              });
                              break;
                              default:
                                  element.images.forEach(element => {
                                    images10.push({ 
/* 
                  "src" : element.directus_files_id.data.full_url, */
                  "src" : element.directus_files_id.data.thumbnails[2].url,
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
            <h1 className={styles.mainHeader}>{this.getWeekHeading()}</h1>
            <button onClick={this.props.defaultSwitch}>{this.getButtonLabelBack()}</button>
          </div>
        <div className={styles.weeks}>
        <div><h2 className={styles.week1}>{this.getWeek1()}</h2></div>
        <ResponsiveGallery images={this.state.images1} useLightBox={true}/>
        <div><h2 className={styles.week}>{this.getWeek2()}</h2></div>
        <ResponsiveGallery images={this.state.images2} useLightBox={true}/>
        <div><h2 className={styles.week}>{this.getWeek3()}</h2></div>
        <ResponsiveGallery images={this.state.images3} useLightBox={true}/>
        <div><h2 className={styles.week}>{this.getWeek4()}</h2></div>
        <ResponsiveGallery images={this.state.images4} useLightBox={true}/>
        <div><h2 className={styles.week}>{this.getWeek5()}</h2></div>
        <ResponsiveGallery images={this.state.images5} useLightBox={true}/>
        <div><h2 className={styles.week}>{this.getWeek6()}</h2></div>
        <ResponsiveGallery images={this.state.images6} useLightBox={true}/>
        <div><h2 className={styles.week}>{this.getWeek7()}</h2></div>
        <ResponsiveGallery images={this.state.images7} useLightBox={true}/>
        <div><h2 className={styles.week}>{this.getWeek8()}</h2></div>
        <ResponsiveGallery images={this.state.images8} useLightBox={true}/>
        <div><h2 className={styles.week}>{this.getWeek9()}</h2></div>
        <ResponsiveGallery images={this.state.images9} useLightBox={true}/>
        <div><h2 className={styles.week}>{this.getWeek10()}</h2></div>
        <ResponsiveGallery images={this.state.images10} useLightBox={true}/>
        </div>
      </div>
    );}
  }

}
export default NewsPuppies;