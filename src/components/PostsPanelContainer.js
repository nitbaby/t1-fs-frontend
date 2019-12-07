import { connect } from 'react-redux'
import { addPost } from '../actions'
import PostsPanel from '../components/PostsPanel'


const mapDispatchToProps = dispatch => {
  return {
    onAddClick: (post) => {
      dispatch(addPost(post))
    }
  }
}

const PostsPanelContainer = connect(
  null,
  mapDispatchToProps
)(PostsPanel)

export default PostsPanelContainer
