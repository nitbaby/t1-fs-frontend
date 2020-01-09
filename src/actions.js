import fetch from 'cross-fetch'
import axios from 'axios'

export const ADD_POST = 'ADD_POST';
export const REQUEST_ADD_POST = 'REQUEST_ADD_POST';
export const RECEIVE_ADD_POST = 'RECEIVE_ADD_POST';
export const SELECT_POST = 'SELECT_POST';
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

/*
Used without API and redux thunk
export function addPost(post) {
  return { type: ADD_POST, post}
}
*/

export function requestAddPost(post) {
  return { type: REQUEST_ADD_POST, post}
}

export function receiveAddPost(post) {
  return { type: RECEIVE_ADD_POST, post}
}

export function selectPost(postId) {
  return { type: SELECT_POST, postId}
}


function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts(posts, categoryId) {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map((post) => (
      {
        id: post.entryID,
        title: post.contentTitle,
        category: post.category,
        description: post.contentDescription,
        image: post.imageUrl,
        createdDate: post.createDateTime,
        comments: getComments(post.comment)

      }
    )).filter((post) => (!categoryId || post.category == categoryId)),
    receivedAt: Date.now()
  }
}


function getComments(comments) {
  if (comments && comments.length) {
    return comments.map((comment) => ({
      username: comment.userName,
      comment: comment.description
    }));
  } else {
    return [];
  }
}

export function fetchPosts(categoryId) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPosts())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.


    return fetch(`https://t1-fs-backend.herokuapp.com/bulletinBoard`)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred here.', error)
      )
      .then(json =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePosts(json, categoryId))
      )
  }
}


export function addNewPost(post) {
  return function(dispatch) {
    dispatch(requestAddPost())
    const postData = {
    	contentTitle: post.title,
    	category: post.category,
    	contentDescription: post.desc,
    	imageUrl: post.image
    }
    axios.post('https://t1-fs-backend.herokuapp.com//bulletinBoard/create', postData)
      .then(function (response) {
        dispatch(receiveAddPost(response))
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
