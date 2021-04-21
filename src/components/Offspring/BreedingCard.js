import React, { Component } from 'react';
import styles from './BreedingCard.module.css';
import Constants from '../../helper/Constants';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ResponsiveGallery from 'react-responsive-gallery';

class BreedingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puppies: [],
            showGallery: false,
            tileData: [],
            actualDog: '',
            showSubNav: false,
            images:[],
            tempDog:''
        }
    }

    componentDidMount() {
        fetch(Constants.dogs + this.props.breeding.id)
            .then(response => response.json())
            .then(data => {
                let tempDog='';
                let puppies = [];
                data.data.forEach(element => {
                    let puppy = {
                        id: element.id,
                        name: element.name,
                        dateOfBirth: element.date_of_birth,
                    }
                    puppies.push(puppy);
                });
                tempDog=data.data[0].name
                this.setState({
                    puppies: puppies,
                    tempDog:tempDog
                })
            });
    }

    onDogSelected = (dog) => {
        this.setState({
            showGallery: true,
            actualDog: dog,
            showSubNav: true,
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
    }

    closeGallery = () => {
        this.setState({
            showGallery: false,
            showSubNav: false
        })
    }

    // switch=()=>{
    //     let x =!this.state.showSubNav
    //     let y =!this.state.showGallery
    //     this.setState({
    //         showGallery: y,
    //         showSubNav: x
    //     })
    // }

    loadImagesOfDog(dog) {
        var id = dog.id;
        fetch('https://api.kooiker-fr.com/kooiker/items/dogs?filter[id][eq]=' + id + '&fields=id,images.directus_files_id.private_hash')
            .then(response => response.json())
            .then(data => {
                let tileData = [];
                let images =[];
                let index = 0;
                let tempDog=dog.name
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
                    images.push({ "src" : url});
                    tileData.push(tile);
                    index++;
                });
                this.setState({
                    images:images,
                    tileData: tileData,
                    tempDog:tempDog
                })
            });
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.containerCard}>
                    <div className={styles.imageContainer}>
                    <img src={this.props.breeding.image} alt="bild"></img>
                    </div>
                    <div className={styles.dataContainer}>
                        <div><h3 className={styles.header}>{this.props.breeding.parents}</h3></div>
                        <ul>{this.getPuppies()} </ul>
                    </div>
                </div>
                <div>
                     {this.state.showSubNav ? <h1>{this.state.tempDog}</h1> : ""}
                   {this.state.showGallery ? <div><ResponsiveGallery images={this.state.images} useLightBox={true}/></div> : ""}</div>
            </div>
        );
    }
}
export default BreedingCard;