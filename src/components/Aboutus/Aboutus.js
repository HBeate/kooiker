import React, { Component } from "react";
import Constants from "../../helper/Constants";
import styles from "./Aboutus.module.css";
import Car from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { GiJumpingDog } from "react-icons/gi";
import Spinner from "./../Spinner/Spinner";
import {Helmet} from "react-helmet";

class Aboutus extends Component {
  state = {
    photos: [],
    body: "",
    id: "",
    title: "",
    image: "",
    loaded: false,
    gallery: [],
    titleDE:'',
    titleFR:'',
    titleEN:'',
    bodyDE:'',
    bodyFR:'',
    bodyEN:'',
  };

  componentDidMount() {
    fetch(Constants.aboutus)
      .then((resp) => resp.json())
      .then(
        (result) => {
          let translation = result.data[0].translations;
          let titleDE='';
          let titleFR='';
          let titleEN='';
          let bodyDE='';
          let bodyFR='';
          let bodyEN='';
          translation.forEach((element) => {
            if (element.language === 'de') {
                titleDE = element.title;
                bodyDE = element.uebersetzung;
            }
            else if (element.language === 'en'){
              titleEN= element.title;
              bodyEN= element.uebersetzung;
          }
          else {
            titleFR= element.title;
            bodyFR= element.uebersetzung;
        }
        this.setState({
          titleDE:titleDE,
          titleFR:titleFR,
          titleEN:titleEN,
          bodyDE:bodyDE,
          bodyFR:bodyFR,
          bodyEN:bodyEN,
        });
          });
          let gallery = [];
          result.data[0].gallery.forEach((element) => {
            let part = {
              key: element.directus_files_id.description,
              img: element.directus_files_id.data.thumbnails[7].url,
              thumbnail: element.directus_files_id.data.thumbnails[0].url,
              title: element.directus_files_id.description,
            };
            gallery.push(part);
          });
          this.setState({
            gallery: gallery,
            loaded: true,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  getAboutusContent = () => {
    let tempdata = [];
    let key = 0;
    let x;
   if(this.props.language==='de'){
     x = this.state.bodyDE;
   }
   else if(this.props.language==='en'){
    x = this.state.bodyEN;
  }
  else {
    x = this.state.bodyFR;
  }
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

  getTitle=()=>{
    let title='';
    if(this.props.language==='de'){title = this.state.titleDE}
    else if(this.props.language==='en'){title = this.state.titleEN}
    else {title = this.state.titleFR}
    return title
  }

  render() {
    if (!this.state.loaded) {
      return <Spinner />;
    }
    if (this.state.loaded) {
      return (
      
        <div className={styles.container}>
          <Helmet> 
          <title>About Us | Kooikerhondje</title>
          <meta
            name="description"
            content="Kooikerhondje de la bande de rigolos"
          />
          <meta
            name="keywords"
            content="Kooikerhondje, Kooiker, breeding, puppies, France"
          />
          <link rel="canonical" href="https://kooiker-fr.com/aboutus" />
          </Helmet>
           <h1 className={styles.mainHeader}>{this.getTitle()}{this.state.title}</h1>
          <div className={styles.aboutUsCard}>
            <div>
              <Car images={this.state.gallery} />
            </div>
            <div className={styles.dataContainer}>
              {this.getAboutusContent()}
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Aboutus;
