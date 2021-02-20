import React, { Component } from 'react';
import styles from './BreedingCard.module.css';
import Gallery from '../Gallery/Gallery';
/* import clsx from 'clsx'; */
import Button from '@material-ui/core/Button';
/* import { withStyles } from '@material-ui/core/styles'; */

/* const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
}; */

class BreedingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puppies: [],
            showGallery: false,
            tileData: [],
            actualDog: '',
            showSubNav: false
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

    onDogSelected = (dog) => {
        console.log(dog)
        this.setState({
            showGallery: true,
            actualDog: dog,
            showSubNav: true
        })
        this.loadImagesOfDog(dog)
        this.props.onClick(dog);
    }

    getPuppies = () => {
        let widgets = [];
        this.state.puppies.forEach(element => {
            widgets.push(<li onClick={() => { this.onDogSelected(element) }} key={element.id} > {element.name}</li>);
        });

        return widgets;
        /*         this.onDogSelected(this.state.puppies[0]); */
    }

    closeGallery = () => {
        this.setState({
            showGallery: false,
            showSubNav: false
        })
    }

    getPuppiesList = () => {
        let widgets = [];
        this.state.puppies.forEach(element => {
            widgets.push(<Button className={styles.newbutton} onClick={() => { this.onDogSelected(element) }} key={element.id}>{element.name}</Button>);
        });
        widgets.push(<Button className={styles.newbutton} key={'50000'} onClick={() => { this.closeGallery() }}>X</Button>);
        return widgets;
    }

    onClick = () => {
        alert("card clicked - now the Detail of the first dog should show up and then change when another Puppy in the list is chosen");
    }

    loadImagesOfDog(dog) {
        var id = dog.id;
        fetch('https://api.kooiker-fr.com/kooiker/items/dogs?filter[id][eq]=' + id + '&fields=id,images.directus_files_id.private_hash')
            .then(response => response.json())
            .then(data => {
                let tileData = [];

                let index = 0;
                data.data[0].images.forEach(element => {
                    let url = "https://api.kooiker-fr.com/kooiker/assets/" + element.directus_files_id.private_hash + "?key=directus-medium-contain"
                    let cols = 1;
                    if (index % 3 === 0) {
                        cols = 1;
                    }
                    let tile = {
                        id: index,
                        img: url,
                        title: "empty",
                        cols: cols
                    }
                    tileData.push(tile);
                    index++;
                });

                this.setState({
                    tileData: tileData
                })

            });
    }
    //onClick={() => { this.onDogSelected(this.state.puppies[0]) }}
    render() {
        return (
            <div className={styles.puppyContainer} >

                <div className={styles.container} onClick={() => { this.onDogSelected(this.state.puppies[0]) }}>
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
                <div>


                    {this.state.showSubNav ? <ul className={styles.subnav}>{this.getPuppiesList()}</ul> : ""}
                    {this.state.showGallery ? <Gallery name={this.state.actualDog.name} images={this.state.tileData} /> : ""}</div>
            </div>
        );
    }
}

export default BreedingCard;