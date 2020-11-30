import React, { Component } from 'react';
import styles from './DogCard.module.css';


/*



*/
class DogCard extends Component {
    componentDidMount(){
        let url ="https://api.kooiker-fr.com/kooiker/items/dogs?fields=*&filter[date_of_birth][eq]=" + this.props.dog.id;
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

export default DogCard;