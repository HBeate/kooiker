import React, { Component } from 'react';
import BreedingCard from './BreedingCard';



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
        this.state = {
            actualDog: { "name": "unknown" },
            test: "hans"
        }
    }

    onDogSelected = (dog) => {

        let obj = {
            actualDog: dog,
            test: "sepp"
        };
        this.setState(obj);
    }

    getBreedings = () => {
        let widgets = [];
        this.props.breedings.forEach(element => {
            widgets.push(<BreedingCard onClick={this.onDogSelected} breeding={element} />);
        });
        return widgets;
    }

    showActualDog = () => {
        if (this.state.actualDog.name != "unknown") {
            return <p>Dog:{this.state.actualDog.name}</p>
        }
    }

    render() {
        return (
            <div>
                {this.getBreedings()}
                {this.showActualDog()}

            </div>
        );
    }
}

export default BreedingCardContainer;
