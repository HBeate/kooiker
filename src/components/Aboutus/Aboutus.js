// import { RssFeed } from '@material-ui/icons';
import React, { Component} from 'react';
import Constants from '../../helper/Constants';


class Aboutus extends Component {
  state = {
    photos: [],
    body: '',
    language: 'en',
    id: 'id',
    title: 'title',
    body: 'body',
  }

  componentDidMount() {

    fetch(Constants.aboutus)
      .then((resp) => resp.json())
      .then((result) => {
        // let id =''
        // let title =''
        // let body =''

        console.log(result.data[0].translations)
        // console.log(result)
        // translations.forEach(element => {
        //   if (element.language===this.state.language){
        //     console.log('Übersetzung '+element.uebersetzung)
        //     console.log ('Überschrift '+element.title)
        //   }
        // });
        this.setState({
          // id: id,
          // title: title,
          // body: body,

        });
      },
        (error) => {
          this.setState({
            error,
          });
        }
      );

/*       image: result.data[0].image.data.thumbnails[3].url,
      image_alt: result.data[0].image_alt, */

  //   fetch(Constants.aboutus)
  //     .then(response => response.json())
  //     .then(data => {
  //       let photos = [];
  //       data.data.forEach(element => {
  //         let photo = {
  //           id: element.id,

  //         }
  //         photos.push(photo);
  //       });
  //       this.setState({
  //         photos: photos
  //       })
  //     });
   }

  getAboutusContent = () => {
    let tempdate = [];
    let key=0;
    let x = this.state.body
    x.split('\n').map(function (item) {
      let line = (<span key={key}>
        {item}
        <br />
      </span>)
      tempdate.push(line)
     return( key++)
      
    })
    return (
      tempdate
    )
  }

  render() {
    return (
      <div>
        <div>{this.state.title}</div>
       <div><img src={this.state.image} alt={this.state.image_alt} /></div> 
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