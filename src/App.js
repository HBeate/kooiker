
import "./App.css";
import BreedingCardContainer from "./components/Offspring/BreedingCardContainer";
import React, { Component } from "react";
import DogDetail from "./components/Offspring/DogDetail";
import Constants from "./helper/Constants";
import Aboutus from "./components/Aboutus/Aboutus";
import getUserLocale from "get-user-locale";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Slideshow from "./components/Aboutus/Slideshow";
import Footer from "./components/Footer/Footer";
import News from './components/News/News';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puppies: [],
      breedings: [],
      showDetail: false,

      language: 'fr',
      image:''
    }

  }

  componentDidMount() {
    let userLocale = getUserLocale();
    var res = userLocale.substring(0, 2);
    fetch(Constants.breeding)
      .then((response) => response.json())
      .then((data) => {
        let breedings = [];
        data.data.forEach((element) => {
          let breeding = {
            id: element.id,
            father: element.father.name,
            mother: element.mother.name,
            dateOfBirth: element.dateofbirth,
            description: element.description,
            image: element.image.data.thumbnails[7].url,
            parents: element.mother.name + " x " + element.father.name,
          };
          breedings.push(breeding);
        });

        this.setState({
          image: data.data[0].image.data.thumbnails[7].url,
          breedings: breedings,
          language: res,
        });
      });
  }

  onBreedingSelected = (id) => {
    alert("top App:" + id);
    this.setState({
      showDetail: true,
      actualBreeding: id,
    });
  };

  ip = () => {
    setTimeout(function () {
      this.state.ipAd.forEach((element) => {
      });
    }, 5000);
  };

  getBreedingContent = () => {
    if (this.state.showDetail) {
      return (
        <div>
          Detail{this.state.breedings[this.state.actualBreeding].name}
          <DogDetail />
        </div>
      );
    } else {
      return (
        <BreedingCardContainer
          onBreedingSelected={this.onBreedingSelected}
          breedings={this.state.breedings}
        />
      );
    }
  };

  render() {
    return (
      <div className="App">
        <h5>UserLocale ist: {this.state.language}</h5>

        <Navbar />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
        </Switch>

        <Switch>
        <Route path='/offspring' exact render ={()=>
          <div className="center">
          <div className="doglist">
            {this.getBreedingContent()}
          </div>
        </div>}/>
        </Switch>

        <Switch>
          <Route path='/news' exact render ={()=><News picture={this.state.image}/> }/>
        </Switch>

        <Switch>
        <Aboutus path='/aboutus' language={this.state.language}/>
        </Switch>

        <Footer/>
      </div>
    );
  }
}
