import React from 'react';

const shortid = require('shortid');

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      const comments = this.props.comments.map((commentObj) => {
        return (
          <div className="row" key={shortid.generate()} >
            <div className="col-12 comment-wpr">
              <label className="font-weight-bold">{commentObj.username}</label>
              <p className="font-italic">{commentObj.comment}</p>
              <hr/>
            </div>
          </div>
        )
      })
        return (
            <div className="container">
              <div className="mt-3">
                {comments}
              </div>
            </div>
        );
    }
}

export default CommentsList;
