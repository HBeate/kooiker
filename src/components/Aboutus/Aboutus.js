// import { RssFeed } from '@material-ui/icons';
import React, { Component } from 'react';
import Constants from '../../helper/Constants';
import styles from './Aboutus.module.css';

class Aboutus extends Component {
  state = {
    photos: [],
    body: '',
    language: 'fr',
    id: '',
    title: '',
    image: '',
  }

  componentDidMount() {

    fetch(Constants.aboutus)
      .then((resp) => resp.json())
      .then((result) => {
        let translation = result.data[0].translations
        translation.forEach(element => {
          if (element.language === this.props.language) {
            this.setState({
              title: element.title,
              body: element.uebersetzung,
            });
          }
        });
        this.setState({
          image: result.data[0].image.data.thumbnails[3].url,
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
    let x = this.state.body
    x.split('\n').map(function (item) {
      let line = (<span key={key}>
        {item}
        <br />
      </span>)
      tempdata.push(line)
      return (key++)

    })
    return (
      tempdata
    )
  }

  render() {
    return (
      <div className={styles.container}>
                <h1 className={styles.mainHeader}>{this.state.title}</h1>
         <div className={styles.aboutUsCard}><div className={styles.imageContainer}><img src={this.state.image} alt={this.state.image_alt} /></div>
         <div className={styles.dataContainer}>
        {this.getAboutusContent()}
        </div>
        </div>
      </div>
    );
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