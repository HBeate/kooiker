import React, { Component } from "react";
import styles from "./News.module.css";
import Constants from "../../helper/Constants";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news:[],
      loaded:false,
    };
  }

  componentDidMount() {
    fetch(Constants.news)
      .then((resp) => resp.json())
      .then((result) => {
        let news=[];
  result.data.forEach(element => {
    if(element.topic==="3"){
      let part=(
      <div className={styles.newsCard} key={element.id}><p>news</p>
      <div className={styles.content}>
        {/* <div className={styles.imageContainer}><img className={styles.imgLeft} src={element.picture.data.thumbnails[7].url} alt={element.picture.title}></img></div> */}
        <div className={styles.dataContainer}>
            <h3 className={styles.header}>{element.translations[0].title}</h3>
          {element.translations[0].uebersetzung}
          <div><button className={styles.buttonRight}>détails</button></div>
        </div>
      </div>
    </div>)
    news.push(part);
    }
    if(element.topic==="1"){
      let part=(
      <div className={styles.newsCard} key={element.id}><p>litter</p>
      <div className={styles.content}>
        <div className={styles.imageContainer}><img className={styles.imgLeft} src={element.picture.data.thumbnails[7].url} alt={element.picture.title}></img></div>
        <div className={styles.dataContainer}>
            <h3 className={styles.header}>{element.translations[0].title}</h3>
          {element.translations[0].uebersetzung}
          {/* <div><button className={styles.buttonRight}>détails</button></div> */}
        </div>
      </div>
    </div>)
    news.push(part);
    }
    if(element.topic==="2"){
      let part=(
      <div className={styles.newsCard} key={element.id}><p>breeding</p>
      <div className={styles.content}><p>mother</p>
      <h1>{element.breeding_dog_mother.name}</h1>
        <div className={styles.imageContainer}><img className={styles.imgLeft} src={element.breeding_dog_mother.parent_image.data.thumbnails[7].url} alt={element.breeding_dog_mother.images[0].directus_files_id.title}></img></div>
        <div className={styles.dataContainer}>
        </div>
      </div>
<p>father</p>
      <h1>{element.breeding_dog_father.name}</h1>
        <div ><img className={styles.imgRight} src={element.breeding_dog_father.parent_image.data.thumbnails[7].url} alt={element.breeding_dog_father.images[0].directus_files_id.title}></img></div>
      </div>)
    news.push(part);
    }
  });
        this.setState({
          news:news,
          loaded:true
        });
      });
  }

  render() {
 
      if (!this.state.loaded) {
        return <div>Loading...!</div>;
      }  if (this.state.loaded) {
        return (
          <div>
      {/* <div className={styles.container}>
        <div>
          <h1 className={styles.mainHeader}>Actualités</h1>
        </div>
        <div className={styles.newsCard}>

          <div className={styles.content}>
            <div className={styles.dataContainer}>
            <h3 className={styles.header}>Première portée d'Ivy :</h3>
              Tout s'est très bien passé et le 07.09.2019, la portée "P" est
              née, à savoir 3 mâles et 2 femelles. La naissance s'est déroulée
              sans problème et a été maîtrisée par Ivy souverain et en peu de
              temps.
              <div><button >détails</button></div>
            </div>
            <div className={styles.imageContainer}>
              <img className={styles.imgRight} src={this.props.picture} alt={"card"}></img>
            </div>
          </div>

        </div>

        <div className={styles.newsCard}>

          <div className={styles.content}>
            <div className={styles.imageContainer}>
            
              <img className={styles.imgLeft} src={this.props.picture} alt={"card"}></img>
            </div>
            <div className={styles.dataContainer}>
                        <h3 className={styles.header}>
            Planification de la première portée:
          </h3>
              Jet-Set Declic est prévu comme le futur père. Les contacts avec
              son propriétaire sont déjà pris et j'espère que le rendez-vous
              sera couronné de succès.
              <div><button className={styles.buttonRight}>détails</button></div>
            </div>
          </div>

        </div>
      </div> */}
         {this.state.news}
         </div>
      );
    }
  }
}

export default News;
