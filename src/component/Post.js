import React from 'react';
import '../css/Post.css';

const shortid = require('shortid');

class PostsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    addPost(title, desc) {
        const posts = this.state.posts.slice();
        posts.push({ title: title, desc: desc });
        this.setState({ posts: posts });
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (<Post key={shortid.generate()} post={post} />);
        });
        return (
            <div className="container">
            <div className="row">
              <div className="col-12">
                <PostInput onClick={(title, desc) => this.addPost(title, desc)} />
              </div>
            </div>
            <hr/>
            <div className="row">
                {posts}
            </div>
            </div>

        );
    }
}

class PostInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', desc: '' };

        this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    }

    handleChangeTextArea(event) {
        this.setState({ desc: event.target.value });
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }
    // return (
    //     <div className="Div-box">
    //         Title:
    //   <input type="text" onChange={this.handleChangeTitle} />
    //         Description:
    //   <textarea onChange={this.handleChangeTextArea} />
    //         <input type="submit" value="Post" onClick={() => this.props.onClick(this.state.title, this.state.desc)
    //         } />
    //     </div>
    // );

    render() {


        return (
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" id="title" placeholder="Enter title" onChange={this.handleChangeTitle}/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" id="description" rows="3" onChange={this.handleChangeTextArea}></textarea>
            </div>
            <button className="btn btn-primary" onClick={(e) => {e.preventDefault();this.props.onClick(this.state.title, this.state.desc)}}>Post</button>
          </form>
        )
    }
}

class Post extends React.Component {
    render() {
        return (
            <div className="col-4">
                <div className="card post-card">
                  <h5 className="card-title">{this.props.post.title}</h5>
                  <p>Description:</p>
                  <p className="card-text">{this.props.post.desc}</p>
                </div>
            </div>

        );
    }
}

export default PostsPanel;
