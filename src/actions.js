/*
 * action types
 */

export const ADD_POST = 'ADD_POST';

/*
 * other constants
 */
/*
 * action creators
 */

export function addPost(post) {
  return { type: ADD_POST, post}
}
