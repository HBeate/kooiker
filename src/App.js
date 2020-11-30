import './App.css';
import Header from './components/Header';
import BreedingCardContainer from './components/BreedingCardContainer';
import React, { Component } from 'react';
import DogDetail from './components/DogDetail';
import OffspringCard from './components/OffspringCard';
import OffspringCardContainer from './components/OffspringCardContainer';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      puppies: [],
      breedings: [],
      showDetail: false

    }
  }


  componentDidMount() {
    fetch('https://api.kooiker-fr.com/kooiker/items/breeding?fields=*.*')
      .then(response => response.json())
      .then(data => {
        let breedings = [];
        data.data.forEach(element => {
          let breeding = {
            id: element.id,
            father: element.father.name,
            mother: element.mother.name,
            dateOfBirth: element.dateofbirth,
            description: element.description,
            image: element.image.data.thumbnails[7].url,
            parents: element.mother.name + " x " + element.father.name

          }
          breedings.push(breeding);
        });

        this.setState({
          breedings: breedings
        })

      });
    fetch('https://api.kooiker-fr.com/kooiker/items/dogs?fields=*.*')
      .then(response => response.json())
      .then(data => {
        let puppies = [];
        data.data.forEach(element => {
          let puppy = {
            id: element.id,
            name: element.name,
            dateOfBirth: element.date_of_birth,
          }
          puppies.push(puppy);
        });

        this.setState({
          puppies: puppies
        })

      });
  }

  onBreedingSelected = (id) => {
    alert("top App:" + id);
    this.setState({
      showDetail: true,
      actualBreeding: id
    })
  }


  getBreedingContent = () => {
    if (this.state.showDetail) {
      return (<div>Detail{this.state.breedings[this.state.actualBreeding].name}<DogDetail /></div>);
    } else {
      return (<BreedingCardContainer onBreedingSelected={this.onBreedingSelected} breedings={this.state.breedings} />)
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="center">
          <div className="doglist">
{/*             {<OffspringCard />} 
            {this.getOffspringContent()}  */}
            {this.getBreedingContent()}
          </div>
        </div>
      </div>
    );
  }
}


