import React, { Component } from 'react';
import styles from './DogList.module.css';
import DogListItem from './DogListItem';

class DogList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={styles.center}>
              
                <div className={styles.container}>
                   
                    <ul>
                        <li><DogListItem name="Paddy" dob="07.09.2019" father="Déclic Jet-Set" /></li>
                        <li><DogListItem name="Prissy-Aimee" dob="07.09.2019" father="Déclic Jet-Set" /></li>
                        <li><DogListItem name="Palu-Thiago" dob="07.09.2019" father="Déclic Jet-Set" /></li>
                        <li><DogListItem name="Puccini" dob="07.09.2019" father="Déclic Jet-Set" /></li>
                        <li><DogListItem name="Pastis" dob="07.09.2019" father="Déclic Jet-Set" /></li>

                    </ul>


                </div>

            </div>

        );
    }
}

export default DogList;