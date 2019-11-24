import { connect } from 'react-redux'
import { addPost } from '../actions'
import PostsPanel from '../components/PostsPanel'


const mapDispatchToProps = dispatch => {
  return {
    onAddClick: (title, description, category) => {
      dispatch(addPost({title, description, category}))
    }
  }
}

const PostsPanelContainer = connect(
  null,
  mapDispatchToProps
)(PostsPanel)

export default PostsPanelContainer
