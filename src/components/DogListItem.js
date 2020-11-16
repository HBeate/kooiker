import React, { Component } from 'react';
import styles from './DogListItem.module.css'


class DogListItem extends Component {

    render() {
        return (
            <div>

                <div className={styles.container}>{this.props.name} - {this.props.dob} - {this.props.father}</div>



            </div>

        );
    }
}

export default DogListItem;