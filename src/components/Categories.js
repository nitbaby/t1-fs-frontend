import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Tile.css';

const shortid = require('shortid');

class Tile extends React.Component {
    render() {
        return (
            <div className="Tile col-sm-4">
              <Link className="nav-link" to={`/posts/${this.props.cat.id}`}>
                <figure>
                    <div className="tile-img"
                      style={{backgroundImage: `url(${this.props.cat.imgUrl})`}}>
                        </div>
                    <figcaption>{this.props.cat.name}</figcaption>
                </figure>
              </Link>
            </div>
        );
    }
}

class Categories extends React.Component {
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
        const tileRows = splitArray(this.state.categories, 3).map(arrays => {
            return (<TileRow key={shortid.generate()} rows={arrays} />);
        })
        return (
            <div className="Tile-panel container">
                {tileRows}
            </div>
        );
    }
}

class TileRow extends React.Component {
    render() {
        const rowElems = this.props.rows.map(row => {
            return (<Tile key={shortid.generate()} cat={row} />)
        });
        return (
            <div className="Tile-row row">
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

export default Categories;
