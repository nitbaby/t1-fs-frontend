import React from 'react';
import Post from './Post';
import { connect } from 'react-redux'

const shortid = require('shortid');

class Posts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let posts;
        if (this.props.posts.length) {
          posts = this.props.posts.map(post => {
              return (<Post key={shortid.generate()} post={post} />);
          });
        } else {
          posts = <div className="card col-12 p-3 mt-4">No posts found!</div>
        }
        return (
            <div className="container">
              <div className="row">
                  {posts}
              </div>
            </div>

        );
    }
}

export default Posts;
