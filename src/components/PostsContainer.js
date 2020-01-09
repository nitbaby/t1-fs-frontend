import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import Posts from '../components/Posts'

const mapStateToProps = state => {
  return {
    posts: state.postsAsync.items,
    isFetching: state.postsAsync.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchAllPosts: (categoryId) => {
      dispatch(fetchPosts(categoryId))
    }
  }
}


const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostsContainer
