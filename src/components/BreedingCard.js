import React, { Component } from 'react';
import styles from './BreedingCard.module.css';
import Gallery from './Gallery';


/*



*/
class BreedingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puppies: [],
            showGallery:false
        }
    }


    componentDidMount() {
        /*         fetch('https://api.kooiker-fr.com/kooiker/items/dogs?fields=*&filter[date_of_birth][eq]=' + this.props.breeding.id)
                   let url ='https://api.kooiker-fr.com/kooiker/items/dogs?fields=*&filter[date_of_birth][eq]=' + this.props.breeding.id; */
        let url = 'https://api.kooiker-fr.com/kooiker/items/dogs?fields=*&filter[date_of_birth][eq]=';

        fetch(url + this.props.breeding.id)
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

    onDogSelected = (element) => {
        this.setState({
            showGallery:true,
            actualDog:element
        })
        this.props.onClick(element);
    }

    getPuppies = () => {
        let widgets = [];
        this.state.puppies.forEach(element => {
            widgets.push(<li onClick={() => { this.onDogSelected(element) }}> {element.name}</li>);
        });
        return widgets;
    }


    onClick = () => {
        alert("card clicked - now the Detail of the first dog should show up and then change when another Puppy in the list is chosen");
    }

    render() {
        return (
            <div className={styles.puppyContainer}>

                <div className={styles.container} >
                    <div className={styles.imageContainer} style={{ backgroundImage: `url(${this.props.breeding.image})` }}>
                    </div>
                    <div className={styles.dataContainer}>
                        <div><h1>{this.props.breeding.parents}</h1></div>
                        <div>{this.props.breeding.dateOfBirth}</div>
                        <div>{this.props.breeding.description}</div>
{/*                         <div>Mother: {this.props.breeding.mother}</div>
                        <div>Father: {this.props.breeding.father}</div> */}
                        <ul>
                            {this.getPuppies()}
                        </ul>
                    </div>
                </div>
                <div>{this.state.showGallery?<Gallery dog={this.state.actualDog} /> : "nothing"}</div>
            </div>
        );
    }
}

export default BreedingCard;