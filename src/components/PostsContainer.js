import { connect } from 'react-redux'
import Posts from '../components/Posts'

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const PostsContainer = connect(
  mapStateToProps
)(Posts)

export default PostsContainer
