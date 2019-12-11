/*
 * action types
 */

export const ADD_POST = 'ADD_POST';
export const SELECT_POST = 'SELECT_POST';

/*
 * other constants
 */
/*
 * action creators
 */

export function addPost(post) {
  return { type: ADD_POST, post}
}

export function selectPost(postId) {
  return { type: SELECT_POST, postId}
}
