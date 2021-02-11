import { RssFeed } from '@material-ui/icons';
import React, { Component, createFactory } from 'react';
import Constants from '../../helper/Constants';
import styles from './Aboutus.module.css';

class Aboutus extends Component {
  state = {
    photos: [],
    body: '',
  }
  componentDidMount() {

    fetch(Constants.aboutus)
      .then((resp) => resp.json())
      .then((result) => {
        this.setState({
          id: result.data[0].id,
          title: result.data[0].title,
          body: result.data[0].body,
          paragraph1: result.data[0].paragraph1,
          paragraph2: result.data[0].paragraph2,
          paragraph3: result.data[0].paragraph3,
          image: result.data[0].image,
          gallery: result.data[0].gallery,
        });
      },
        (error) => {
          this.setState({
            error,
          });
        }
      );

    fetch(Constants.aboutus)
      .then(response => response.json())
      .then(data => {
        let photos = [];
        data.data.forEach(element => {
          let photo = {
            id: element.id,
          }
          photos.push(photo);
        });

        this.setState({
          photos: photos
        })
      });
  }

  getAboutusContent = () => {
    let tempdate=[];
    let x = this.state.body
    x.split('\n').map(function (item) {
      let line = (<span>
        {item}
        <br />
      </span>)
      tempdate.push(line)
    })
    return (
      tempdate
    )
}

  render() {
    return (
      <div>
        <div>{this.state.title}</div>
        {this.getAboutusContent()}
{/* <p>{this.state.body}</p> */}
        {/* <p>{this.state.paragraph1}</p>
        <p>{this.state.paragraph2}</p>
        <p>{this.state.paragraph3}</p> */}


      </div>

    );
  }
}

export default Aboutus;

