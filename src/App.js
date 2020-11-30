import './App.css';
import Header from './components/Header';
import DogCardContainer from './components/DogCardContainer';
import React, { Component } from 'react';
import DogDetail from './components/DogDetail';
import OffspringCard from './components/OffspringCard';
import OffspringCardContainer from './components/OffspringCardContainer';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      puppies: [],
      dogs: [],
      showDetail: false

    }
  }


  componentDidMount() {
    fetch('https://api.kooiker-fr.com/kooiker/items/breeding?fields=*.*')
      .then(response => response.json())
      .then(data => {
        let dogs = [];
        data.data.forEach(element => {
          let dog = {
            id: element.id,
            father: element.father.name,
            mother: element.mother.name,
            dateOfBirth: element.dateofbirth,
            description: element.description,
            image: element.image.data.thumbnails[7].url,
            parents: element.mother.name + " x " + element.father.name

          }
          dogs.push(dog);
        });

        this.setState({
          dogs: dogs
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

  onDogSelected = (id) => {
    alert("top App:" + id);
    this.setState({
      showDetail: true,
      actualDog: id
    })
  }

  getOffspringContent = () => {
    <OffspringCardContainer puppies={this.state.puppies} />
  }

  getDogContent = () => {
    if (this.state.showDetail) {
      return (<div>Detail{this.state.dogs[this.state.actualDog].name}<DogDetail /></div>);
    } else {
      return (<DogCardContainer onDogSelected={this.onDogSelected} dogs={this.state.dogs} />)
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
            {this.getDogContent()}
          </div>
        </div>
      </div>
    );
  }
}


