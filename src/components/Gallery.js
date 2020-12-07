import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const classes = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    gridList: {
        width: 500,
        height: 450,
        margin: '20px',
    },
}

export default class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            tileData:[]
        }
    } 

    componentDidUpdate(prevProps, prevState){
        
        if (prevProps.dog && prevProps.dog.id !== this.props.dog.id){
           
            this.loadImagesOfDog();
        }

    }

    componentDidMount() {
       this.loadImagesOfDog();

    }

    loadImagesOfDog(){
        var id = this.props.dog.id;
        fetch('https://api.kooiker-fr.com/kooiker/items/dogs?filter[id][eq]='+ id +'&fields=id,images.directus_files_id.private_hash')
            .then(response => response.json())
            .then(data => {
                let tileData = [];
               
                let index = 0;
                data.data[0].images.forEach(element => {
                    let url = "https://api.kooiker-fr.com/kooiker/assets/" + element.directus_files_id.private_hash + "?key=directus-medium-crop"
                    let cols=1;
                     if (index%3===0){
                         cols = 1; 
                    } 
                    let tile = {
                        id:index,
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

    render() {
        return (
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={4}>
                    {this.state.tileData.map((tile) => (
                        <GridListTile key={tile.id} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}