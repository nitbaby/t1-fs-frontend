import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      const params = this.props.match.params;
      const categoryId = parseInt(params.categoryId);
      if (isFinite(categoryId)) {
        this.props.onFetchAllPosts(categoryId);
      } else {
        this.props.onFetchAllPosts();
      }
    }

    handlePostClick(postId) {
      this.props.history.push(`/post/${postId}`);
    }

    render() {
        let posts;
        if (this.props.isFetching) {
          posts = <div className="card col-12 p-3 mt-4">Loading...</div>
        } else if (this.props.posts.length) {
          posts = this.props.posts.map(post => {
              return (<Post key={post.id} post={post} onPostClick={(post)=>this.handlePostClick(post)}/>);
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
