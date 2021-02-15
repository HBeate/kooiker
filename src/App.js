import './App.css';
import BreedingCardContainer from './components/Offspring/BreedingCardContainer';
import React, { Component } from 'react';
import DogDetail from './components/Offspring/DogDetail';
import Constants from './helper/Constants';
import Aboutus from './components/Aboutus/Aboutus';
import publicIp from "public-ip";
import getUserLocale from 'get-user-locale';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Slideshow from './components/Aboutus/Slideshow';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      puppies: [],
      breedings: [],
      showDetail: false,
      ip:''
    }
  }

  componentDidMount() {
    (async () => {
      console.log(await publicIp.v4());
      //=> '46.5.21.123'
      this.setState({
        ip: await publicIp.v4(),
       
      })
  })();
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
          breedings: breedings,
         
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
 ip =()=>{

  setTimeout(function() {
    this.state.ipAd.forEach(element => {
      console.log(element)
    });
  }, 5000);

 }

  getBreedingContent = () => {
    if (this.state.showDetail) {
      return (<div>Detail{this.state.breedings[this.state.actualBreeding].name}<DogDetail /></div>);
    } else {
      return (<BreedingCardContainer onBreedingSelected={this.onBreedingSelected} breedings={this.state.breedings} />)
    }
  }

  render() {
    const userLocale = getUserLocale();
    return (
      <div className="App">

         <p>Your IP: {this.state.ip}</p> 
              <h1>UserLocale: {userLocale}</h1>

        <Navbar />
        <Switch>
          <Route path='/' exact render ={()=><Home/> }/>
          {/* <Route path='/Mytab' exact render ={()=><MyTabs /> }/> */}
        {/* <Header /> */}
        {/* <MyTabs /> */}

        {/* <div className="center">
          <div className="doglist">
                        {<OffspringCard />} 
            {this.getOffspringContent()} 
            {this.getBreedingContent()}
          </div>
        </div> */}

        </Switch>
        <Aboutus />
        <Slideshow />
      </div>
    );
  }
}


