import { combineReducers } from 'redux'
import {
  ADD_POST,
  SELECT_POST
} from './actions'

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

const rootReducer = combineReducers({
  posts
})

export default rootReducer
