import React from 'react';
import '../css/Tile.css';

class Tile extends React.Component {
    render() {
        return (
            <div className="Tile">
                <figure>
                    <img src={this.props.cat.imgUrl} className="Tile-images" alt="Not found." />
                    <figcaption>{this.props.cat.name}</figcaption>
                </figure>
            </div>
        );
    }
}

class TilePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        {/*TODO: Fix the CORS error properly using NGINX*/}
        fetch('https://localhost:9286/getBoardCategories')
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({ categories: data.categories });
            })
    }
    render() {
        var key = 0;
        const tileRows = splitArray(this.state.categories, 3).map(arrays => {
            return (<TileRow key={key++} rows={arrays} />);
        })
        return (
            <div className="Tile-panel">
                {tileRows}
            </div>
        );
    }
}

class TileRow extends React.Component {
    render() {
        var key = 0;
        const rowElems = this.props.rows.map(row => {
            return (<Tile key={key++} cat={row} />)
        });
        return (
            <div className="Tile-row">
                {rowElems}
            </div>
        );
    }
}

function splitArray(array, split_size) {
    let index = 0;
    let arrayLength = array.length;
    let tempArray = [];
    let splits = [];

    for (index = 0; index < arrayLength; index += split_size) {
        splits = array.slice(index, index + split_size);
        tempArray.push(splits);
    }

    return tempArray;
}

export default TilePanel;