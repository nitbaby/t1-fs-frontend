import { combineReducers } from 'redux'
import {
  ADD_POST,
  SELECT_POST,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from './actions'

/* When used without redux-thunk
function posts(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          title: action.post.title,
          description: action.post.desc,
          category: action.post.category,
          image: action.post.image,
          id: action.post.id
        }
      ]
    case SELECT_POST:
      return state.map((post) => {
        post.isSelected = post.id === action.postId
        return post;
      })
    default:
      return state
  }
}
*/

// With redux thunk and api end points
function postsAsync(state = {
      isFetching: false,
      items: []
    },
    action
  ) {
    switch (action.type) {
      case REQUEST_POSTS:
        return Object.assign({}, state, {
        isFetching: true,
      })

      case RECEIVE_POSTS:
        return Object.assign({}, state,
          {
            isFetching: false,
            items: action.posts,
            lastUpdated: action.receivedAt
          })

      case SELECT_POST:
        return Object.assign({}, state,
          {
            items: state.items.map((post) => {
              post.isSelected = post.id === action.postId
              return post;
            })
          })

      default:
        return state
    }
  }

const rootReducer = combineReducers({
  postsAsync
})

export default rootReducer
