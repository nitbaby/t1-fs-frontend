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
            <div>
                {posts}
                <PostInput onClick={(title, desc) => this.addPost(title, desc)} />
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


    render() {
        return (
            <div className="Div-box">
                Title:
          <input type="text" onChange={this.handleChangeTitle} />
                Description:
          <textarea onChange={this.handleChangeTextArea} />
                <input type="submit" value="Post" onClick={() => this.props.onClick(this.state.title, this.state.desc)
                } />
            </div>
        );
    }
}

class Post extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Title: {this.props.post.title}
                </div>
                <div>
                    Description: {this.props.post.desc}
                </div>
                <hr />
            </div>

        );
    }
}

export default PostsPanel;