import React, { Component } from 'react';
import styles from './BreedingCard.module.css';


/*



*/
class BreedingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puppies: []
        }
    }

/*     componentDidMount() {
        fetch('https://api.kooiker-fr.com/kooiker/items/dogs?fields=*&filter[date_of_birth][eq]=' + this.props.breeding.id)
/*         let url ="https://api.kooiker-fr.com/kooiker/items/dogs?fields=*&filter[date_of_birth][eq]=" + this.props.breeding.id;
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

    } */



    getDogs() {


        /*         getDogs = () => {
                    let widgets = [];
                    this.props.breedings.forEach(element => {
                        widgets.push(<BreedingCard onClick={this.onDogSelected} dog={element} />);
                    });
                    return widgets;
                } */

    }

    onClick = () => {
        this.props.onClick(this.props.id);

        //alert("click" + this.props.id)
    }
    render() {
        return (
            <div className={styles.container} onClick={this.onClick}>
                <div className={styles.imageContainer} style={{ backgroundImage: `url(${this.props.dog.image})` }}>
                </div>
                <div className={styles.dataContainer}>
                    <div><h1>{this.props.dog.parents}</h1></div>
                    <div>{this.props.dog.dateOfBirth}</div>
                    <div>{this.props.dog.description}</div>
                    <div>Mother: {this.props.dog.mother}</div>
                    <div>Father: {this.props.dog.father}</div>
                </div>
            </div>
        );
    }
}

export default BreedingCard;