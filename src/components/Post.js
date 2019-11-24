import React from 'react';

class Post extends React.Component {
    render() {
        return (
            <div className="col-4">
                <div className="card post-card">
                  <h5 className="card-title">{this.props.post.title}</h5>
                  <p className="card-text">{this.props.post.description}</p>
                  <div className="">
                    <label className="pr-3">Category</label>
                    <span className="font-weight-bold">{this.props.post.category}</span>
                  </div>
                </div>
            </div>

        );
    }
}
export default Post;
