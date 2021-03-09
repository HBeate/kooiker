// import { RssFeed } from '@material-ui/icons';
import React, { Component } from 'react';
import Constants from '../../helper/Constants';

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
      <div>
         <div><img src={this.state.image} alt={this.state.image_alt} /></div>
        <div>{this.state.title}</div>
        {this.getAboutusContent()}
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