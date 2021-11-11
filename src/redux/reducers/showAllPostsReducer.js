import { ALL_POSTS_REQUEST, ALL_POSTS_ERROR, ALL_POSTS_SUCCESS } from '../types/allPostsTypes'

const INITIAL_STATE = {
  posts: [],
  loading: true,
  error: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ALL_POSTS_REQUEST:
      return { ...state, loading: true }
    case ALL_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.posts }
    case ALL_POSTS_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
