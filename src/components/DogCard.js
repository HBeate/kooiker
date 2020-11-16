import React, { Component } from 'react';
import styles from './DogCard.module.css';

class DogCard extends Component {
    onClick = () => {
        this.props.onClick(this.props.id);
        //alert("click" + this.props.id)
    }
    render() {
        return (
            <div className={styles.container} onClick={this.onClick}>
                <div className={styles.imageContainer} style={{ backgroundImage: `url(${this.props.image})` }}>

                </div>

                <div className={styles.dataContainer}>
                    <div><h1>{this.props.name}</h1></div>
                    <div>Parents: {this.props.parents}</div>
                    <div>Date of birth: {this.props.dob}</div>
                    <div>Siblings: {this.props.siblings}</div>


                </div>



            </div>

        );
    }
}

export default DogCard;