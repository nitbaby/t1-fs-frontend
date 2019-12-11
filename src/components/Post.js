import React from 'react';
import { Link } from 'react-router-dom'
class Post extends React.Component {
    render() {
        return (
            <div className="col-4" onClick={()=>this.props.onPostClick(this.props.post.id)}>
                <div className="card post-card same-height">
                  <h5 className="card-title">{this.props.post.title}</h5>
                  <p className="card-text">{this.props.post.description}</p>
                  {/*
                  <div className="">
                    <label className="pr-3">Category</label>
                    <span className="font-weight-bold">{this.props.post.category}</span>
                  </div>
                  <p>id: {this.props.post.id}</p>*/}
                  <Link className="" to={"/post/"+this.props.post.id}>See details</Link>
                </div>
            </div>
        );
    }
}
export default Post;
