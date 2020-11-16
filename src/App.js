import './App.css';
import DogList from './components/DogList';
import Header from './components/Header';
import DogCardContainer from './components/DogCardContainer';
import React, { Component } from 'react';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      showDetail:false
    }
  }

  componentDidMount() {
    fetch('http://159.65.127.175/kooiker/items/puppies?fields=*.*')
      .then(response => response.json())
      .then(data => {
        let dogs = [];
        data.data.forEach(element => {
          let dog = {
            id: element.id,
            name: element.name,
            dateOfBirth:element.dateofbirth,
            image:element.teaserimage.data.thumbnails[7].url,
            parents:element.parents
          }
          dogs.push(dog);
        });

        this.setState({
          dogs:dogs
        })

      });
  }

  onDogSelected = (id)=>{
    alert("top:" + id);
    this.setState({
      showDetail:true,
      actualDog:id
    })
  }

  getContent = ()=>{
    if (this.state.showDetail){
      return (<div>Detail{this.state.dogs[this.state.actualDog].name}</div>);
    }else{
      return (<DogCardContainer onDogSelected={this.onDogSelected} dogs={this.state.dogs} />)
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <DogList />
        <div className="center">
          <div className="doglist">
              {this.getContent()}
          </div>
        </div>


      </div>
    );
  }
}


