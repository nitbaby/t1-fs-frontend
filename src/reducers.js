import { combineReducers } from 'redux'
import {
  ADD_POST
} from './actions'

function posts(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          title: action.post.title,
          description: action.post.description,
          category: action.post.category

        }
      ]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts
})

export default rootReducer
