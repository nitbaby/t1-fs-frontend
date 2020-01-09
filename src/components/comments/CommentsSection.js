import React from 'react';
import { connect } from 'react-redux'
import CommentsList from './CommentsList'
import axios from 'axios'
const shortid = require('shortid');

class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          comment: '',
          comments: props.comments
      };
    }
    onAddCommentClick() {
      this.setState({ savingComment: true });
      const commentPostData = {
        userName: this.state.username,
        description: this.state.comment
      }
      const self = this;
      axios.post(`https://t1-fs-backend.herokuapp.com//bulletinBoard/id/${this.props.postId}/comment`, commentPostData)
        .then(function (response) {
          self.setState({
            comments: [...self.state.comments, {
                username: self.state.username,
                comment: self.state.comment
              }
            ],
            username: '',
            comment: ''
          });
          console.log(self.state);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => this.setState({ savingComment: false }));

    }
    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    handleChangeComment(event) {
        this.setState({ comment: event.target.value });
    }
    render() {
      let savingSection;
      if (this.state.savingComment) {
        savingSection = <div>Saving comment...</div>
      } else {
        savingSection = <button className="btn btn-primary" onClick={(e) => {this.onAddCommentClick(e)}}>Add Comment</button>
      }
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
                      {savingSection}
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
