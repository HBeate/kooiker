import './App.css';
import Header from './components/Header';
import BreedingCardContainer from './components/BreedingCardContainer';
import React, { Component } from 'react';
import DogDetail from './components/DogDetail';
import MyTabs from './components/MyTabs';
import Constants from './components/helper/Constants'


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
    fetch(Constants.breeding)
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
        <MyTabs />

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


