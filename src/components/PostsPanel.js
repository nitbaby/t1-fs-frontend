import React from 'react';
import '../css/Post.css';
import Post from './Post';
import PostInput from './PostInput';
import { connect } from 'react-redux'

const shortid = require('shortid');

class PostsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    addPost(title, desc, category) {
        this.props.onAddClick(title, desc, category);
    }

    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-12 mt-3">
                <PostInput onClick={(title, desc, category) => this.addPost(title, desc, category)} />
              </div>
            </div>
            <hr/>
            </div>

        );
    }
}

export default PostsPanel;
