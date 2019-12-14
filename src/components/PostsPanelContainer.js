import { connect } from 'react-redux'
import { addPost, addNewPost } from '../actions'
import PostsPanel from '../components/PostsPanel'


const mapDispatchToProps = dispatch => {
  return {
    onAddClick: (post) => {
      dispatch(addNewPost(post))
    }
  }
}

const PostsPanelContainer = connect(
  null,
  mapDispatchToProps
)(PostsPanel)

export default PostsPanelContainer
