import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectPost } from '../actions'
import PostsPanel from '../components/PostsPanel'
import categories from '../services/Categories'

class PostDetail extends React.Component {
    constructor(props) {
      super(props);
      const id = this.props.match.params.id;
      this.props.onPostSelect(id);
      this.state = { selectedPostId: id};
    }
    render() {
        const postId = (this.props.post && this.props.post.id) ? this.props.post.id : null;
        if (postId) {
          const category = categories[this.props.post.category];
          return(
            <div className="container">
              <div className="row">
                <div className="col-12">
                    <div className="card post-card">
                    <div className="row">
                      <div className="col-12">
                        <h2 className="card-title">{this.props.post.title}</h2>
                      </div>
                    </div>
                      <div className="row">
                        <div className="col-6">
                          <img src={this.props.post.image} alt={this.props.post.title}/>
                        </div>
                        <div className="col-6">
                          <label className="font-weight-bold">Description</label>
                          <p className="">{this.props.post.description}</p>
                          <label className="font-weight-bold">Category</label>
                          <p><Link className="" to={"/category/"+this.props.post.category}>{category}</Link></p>
                          {/*<p>id: {this.props.post.id}</p>*/}
                        </div>
                      </div>

                      <div className="row">
                      </div>
                    </div>
                </div>
              </div>
            </div>
          )
        } else {
          return (
            <div className="container">
              <div className="row">
                <div className="col-4">
                    <div className="card post-card">
                      <p>Selected Post ID: 404 Post not found!</p>
                    </div>
                </div>
              </div>
            </div>
          );
        }
    }
}

function getSelectedPost(posts) {
  const selectedPost = posts.filter((post) => post.isSelected === true);
  // return selectedPost.length ? selectedPost[0] : {}
  return {
    id: "3513",
    title: "asdfads",
    description: "sample description",
    category: "2",
    image: "https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg"
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPostSelect: (postId) => {
      dispatch(selectPost(postId))
    }
  }
}

const mapStateToProps = state => {
  return {
    post: getSelectedPost(state.posts)
  }
}

const PostDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)

export default PostDetailContainer;
