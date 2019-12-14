import React from 'react';
import { Link } from 'react-router-dom'
import * as moment from 'moment'
class Post extends React.Component {
    render() {
      const createdDateTime = moment(this.props.post.createdDate).format("MMM Do YYYY, h:mm a");;
        return (
            <div className="col-4" onClick={()=>this.props.onPostClick(this.props.post.id)}>
                <div className="card post-card same-height">
                  <h5 className="card-title">{this.props.post.title}</h5>
                  <p className="card-text">{this.props.post.description}</p>
                  <div className="created-on">
                    <div className="text-right">Created On</div>
                    <div className="text-right"><p className="card-text">{createdDateTime}</p></div>
                  </div>
                </div>
            </div>
        );
    }
}
export default Post;
