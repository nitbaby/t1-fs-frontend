import React from 'react';
import { connect } from 'react-redux'
import CommentsList from './CommentsList'
const shortid = require('shortid');

class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          comment: '',
          comments: [{
            username: 'Nithin',
            comment: 'lblabflabf fad asdg asdg dsl g'
          },{
            username: 'Joe',
            comment: 'yoyoyo tooyoyo oy oyoy oyyo'
          }]
      };
    }
    onAddCommentClick() {
      this.setState({
        comments: [...this.state.comments, {
            username: this.state.username,
            comment: this.state.comment
          }
        ]
      });
    }
    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    handleChangeComment(event) {
        this.setState({ comment: event.target.value });
    }
    render() {
        return (
            <div className="container">
              <div className="row">
                  <div className="col-12">
                    <h3>Comments</h3>
                    <div className="form-group">
                      <label htmlFor="title">Username</label>
                      <input type="text" className="form-control" id="title" placeholder="Enter title" required
                        onChange={(e) => this.handleChangeUsername(e)}
                        value={this.state.username}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Comment</label>
                      <textarea className="form-control" id="description" rows="3" placeholder="Enter description"
                        onChange={(e) => this.handleChangeComment(e)} required
                        value={this.state.comment}>
                      </textarea>
                    </div>
                    <button className="btn btn-primary" onClick={(e) => {this.onAddCommentClick(e)}}>Add Comment</button>
                  </div>
              </div>
              <div className="row">
                <div className="col-12">
                </div>
              </div>
              <CommentsList comments={this.state.comments}/>
            </div>
        );
    }
}

export default CommentsSection;
