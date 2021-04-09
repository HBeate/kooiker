import React, { Component } from "react";
import NewsPuppies from "../News/NewsPuppies/NewsPuppies";
import Spinner from './../Spinner/Spinner'
import DogsDOB from "./DogsDOB";

class WelpenElement extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          welpen:[],
          loaded:true, 
          showParents: 'none',
          // welpenImages:[],
          welpenImagesShow:'none',
          breedingShow:'none',
        }
    }
    parentsSwitch = (element) => {
      if (this.state.showParents === 'none') {
        this.setState({
          showParents: 'flex',
          welpenImagesShow:'none',
          breedingShow:'none'
        });
      } else {
        this.setState({
          showParents: 'none',
          welpenImagesShow:'none',
          breedingShow:'none'
        });
      }
    }

    welpenSwitch = ()=>{
      if (this.state.welpenImagesShow === 'none') {
        this.setState({
          showParents: 'none',
          welpenImagesShow:'flex',
          breedingShow:'none'
        });
      } else {
        this.setState({
          welpenImagesShow: 'none',
          showParents: 'none',
          breedingShow:'none'
        });
      }
    }

    breedingSwitch = ()=>{
      if (this.state.breedingShow === 'none') {
        this.setState({
          showParents: 'none',
          welpenImagesShow:'none',
          breedingShow:'flex'
        });
      } else {
        this.setState({
          welpenImagesShow: 'none',
          showParents: 'none',
          breedingShow:'none'
        });
      }
    }

    elements=()=>{
      let welpen=[];
      this.props.elements.forEach(element => {
        if (this.props.language === "en") {
            let part = (
                <div key={element.id}>
              <div>{element.translations[0].title}</div>
              <div>{element.translations[0].uebersetzung}</div>
              <img src={element.foto.data.thumbnails[3].url} alt={element.name}></img>
              <div>
                <button onClick={ ()=> this.parentsSwitch(element)}>Parents</button>
                <button onClick={ ()=> this.welpenSwitch()}>Welpen</button>
                <button onClick={ ()=> this.breedingSwitch()}>Welpen mit namen</button></div>
                  <div style={{ display: this.state.showParents }}>
                    <div>
                    <h1>{element.mutter.parent_full_name}</h1>
                    <img src={element.mutter.parent_image.data.full_url} alt={element.mutter.name} width="300" height="300"/>
                    <p>willebrand: {element.mutter.willebrand}</p>
                    <p>petella: {element.mutter.petella}</p>
                    <p>eyes: {element.mutter.eyes}</p>
                    <p>dentures: {element.mutter.dentures}</p>
                    <p>height: {element.mutter.height}</p>
                    <p>dob: {element.mutter.parent_date_of_birth}</p>
                    </div>
                    <div>
                    <h1>{element.vater.parent_full_name}</h1>
                    <img src={element.vater.parent_image.data.full_url} alt={element.mutter.name} width="300" height="300"/>
                    <p>willebrand: {element.vater.willebrand}</p>
                    <p>petella: {element.vater.petella}</p>
                    <p>eyes: {element.vater.eyes}</p>
                    <p>dentures: {element.vater.dentures}</p>
                    <p>height: {element.vater.height}</p>
                    <p>dob: {element.vater.parent_date_of_birth}</p>
                    </div>
                  </div>
                  <div style={{ display: this.state.welpenImagesShow }}><NewsPuppies  dob={element.dob.dateofbirth}/></div>
                  <div style={{ display: this.state.breedingShow }}><DogsDOB dob={element.dob.dateofbirth}/></div>
              </div>
              
            );
            welpen.push(part);
            }
            else if (this.props.language === "de") {
            let part = (
                <div key={element.id}>
              <div>{element.translations[1].title}</div>
              <div>{element.translations[1].uebersetzung}</div>
              <img src={element.foto.data.thumbnails[3].url} alt={element.name}></img>
              <div>
                <button onClick={ ()=> this.parentsSwitch(element)}>Parents</button>
                <button onClick={ ()=> this.welpenSwitch()}>Welpen</button>
                <button onClick={ ()=> this.breedingSwitch()}>Welpen mit namen</button></div>
                  <div style={{ display: this.state.showParents }}>
                    <div>
                    <h1>{element.mutter.parent_full_name}</h1>
                    <img src={element.mutter.parent_image.data.full_url} alt={element.mutter.name} width="300" height="300"/>
                    <p>willebrand: {element.mutter.willebrand}</p>
                    <p>petella: {element.mutter.petella}</p>
                    <p>eyes: {element.mutter.eyes}</p>
                    <p>dentures: {element.mutter.dentures}</p>
                    <p>height: {element.mutter.height}</p>
                    <p>dob: {element.mutter.parent_date_of_birth}</p>
                    </div>
                    <div>
                    <h1>{element.vater.parent_full_name}</h1>
                    <img src={element.vater.parent_image.data.full_url} alt={element.mutter.name} width="300" height="300"/>
                    <p>willebrand: {element.vater.willebrand}</p>
                    <p>petella: {element.vater.petella}</p>
                    <p>eyes: {element.vater.eyes}</p>
                    <p>dentures: {element.vater.dentures}</p>
                    <p>height: {element.vater.height}</p>
                    <p>dob: {element.vater.parent_date_of_birth}</p>
                    </div>
                  </div>
                  <div style={{ display: this.state.welpenImagesShow }}><NewsPuppies  dob={element.dob.dateofbirth}/></div>
                  <div style={{ display: this.state.breedingShow }}><DogsDOB dob={element.dob.dateofbirth}/></div>
              </div>
            );
            welpen.push(part);
            }
            else if (this.props.language === "fr") {
                let part = (
                    <div key={element.id}>
                    <div>{element.translations[2].title}</div>
                    <div>{element.translations[2].uebersetzung}</div>
                    <img src={element.foto.data.thumbnails[3].url} alt={element.name}></img>
                    <div>
                <button onClick={ ()=> this.parentsSwitch(element)}>Parents</button>
                <button onClick={ ()=> this.welpenSwitch()}>Welpen</button>
                <button onClick={ ()=> this.breedingSwitch()}>Welpen mit namen</button></div>
                  <div style={{ display: this.state.showParents }}>
                    <div>
                    <h1>{element.mutter.parent_full_name}</h1>
                    <img src={element.mutter.parent_image.data.full_url} alt={element.mutter.name} width="300" height="300"/>
                    <p>willebrand: {element.mutter.willebrand}</p>
                    <p>petella: {element.mutter.petella}</p>
                    <p>eyes: {element.mutter.eyes}</p>
                    <p>dentures: {element.mutter.dentures}</p>
                    <p>height: {element.mutter.height}</p>
                    <p>dob: {element.mutter.parent_date_of_birth}</p>
                    </div>
                    <div>
                    <h1>{element.vater.parent_full_name}</h1>
                    <img src={element.vater.parent_image.data.full_url} alt={element.mutter.name} width="300" height="300"/>
                    <p>willebrand: {element.vater.willebrand}</p>
                    <p>petella: {element.vater.petella}</p>
                    <p>eyes: {element.vater.eyes}</p>
                    <p>dentures: {element.vater.dentures}</p>
                    <p>height: {element.vater.height}</p>
                    <p>dob: {element.vater.parent_date_of_birth}</p>
                    </div>
                  </div>
                  <div style={{ display: this.state.welpenImagesShow }}><NewsPuppies  dob={element.dob.dateofbirth}/></div>
                  <div style={{ display: this.state.breedingShow }}><DogsDOB dob={element.dob.dateofbirth}/></div>
              </div>
                );
                welpen.push(part);
                }
              });
              return welpen;
    }
    render() { 
      if (!this.state.loaded) {return (<div><Spinner/></div>)}
      if (this.state.loaded)  {return ( <div>{this.elements()}</div> )}
    }
}
 
export default WelpenElement;