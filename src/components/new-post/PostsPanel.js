import React from 'react';
import '../../css/Post.css';
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

    addPost(post) {
        this.props.onAddClick(post);
    }

    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-12 mt-3">
                <PostInput onClick={(post) => this.addPost(post)} />
              </div>
            </div>
            <hr/>
            </div>

        );
    }
}

export default PostsPanel;
