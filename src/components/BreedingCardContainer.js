import React, { Component } from 'react';
import DogCard from './DogCard';


/*
  let dog = {
            name: element.name,
            dateOfBirth:element.dateofbirth,
            image:element.teaserimage.data.thumbnails[7].url,
            parents:element.parents
          }

*/
class BreedingCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onDogSelected = (id)=>{
       this.props.onDogSelected(id);
    }

    getDogs = () => {
        let widgets = [];
        this.props.breedings.forEach(element => {
            widgets.push(<DogCard onClick={this.onDogSelected} dog={element} />);
        });
        return widgets;
    }


    render() {
        return (
            <div>
                {this.getDogs()}
            </div>
        );
    }
}

export default BreedingCardContainer;
