// import { RssFeed } from '@material-ui/icons';
import React, { Component } from "react";
import Constants from "../../helper/Constants";
import styles from "./Aboutus.module.css";
// import Gallery from "../Gallery/Gallery";
import Car from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


class Aboutus extends Component {
  state = {
    photos: [],
    body: "",
    language: "fr",
    id: "",
    title: "",
    image: "",
    loaded: false,
  };

  componentDidMount() {
    fetch(Constants.aboutus)
      .then((resp) => resp.json())
      .then(
        (result) => {
          //console.log(result)
          let translation = result.data[0].translations;
          translation.forEach((element) => {
            if (element.language === this.props.language) {
              this.setState({
                title: element.title,
                body: element.uebersetzung,
              });
            }
          });
          let gallery = [];
          // const posts =  result.data[0].gallery.slice(0,4);
          // posts.forEach((element) => {

          result.data[0].gallery.forEach((element) => {
            let part = {
              key: element.directus_files_id.description,
              img: element.directus_files_id.data.thumbnails[7].url,
              thumbnail: element.directus_files_id.data.thumbnails[0].url,
              title: element.directus_files_id.description,
            };
            gallery.push(part);
          });
          console.log(this.state.gallery);
          this.setState({
            gallery: gallery,
            image: result.data[0].image.data.thumbnails[3].url,
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
    let x = this.state.body;
    x.split("\n").map(function (item) {
      let line = (
        <span key={key}>
          {item}
          <br />
        </span>
      );
      tempdata.push(line);
      return key++;
    });
    return tempdata;
  };

  render() {
    if (!this.state.loaded) {
      return <div>Loading...!</div>;
    }
    if (this.state.loaded) {
      return (
        <div className={styles.container}>
          <h1 className={styles.mainHeader}>{this.state.title}</h1>
          <div className={styles.aboutUsCard}>
            <div className={styles.imageContainer}>
              <img src={this.state.image} alt={this.state.image_alt} />
            </div>
            <div className={styles.dataContainer}>
              {this.getAboutusContent()}
            </div>
          </div>
          {/* <Gallery images={this.state.gallery}/> */}
          <div style={{"width" : "300px"}}>
            <Car images={this.state.gallery} />
          </div>
        </div>
      );
    }
  }
}

export default Aboutus;

/* {this.state.body.split(“\n”).map(function(item) {
  return (
    <span>
      {item}
      <br/>
    </span>
  )
})} */
