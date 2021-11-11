
import { ALL_POSTS_REQUEST, ALL_POSTS_SUCCESS, ALL_POSTS_ERROR } from '../types/allPostsTypes'

export const allPostsRequest = () => ({
  type: ALL_POSTS_REQUEST,
})

export const allPostsSuccess = (posts) => ({
  type: ALL_POSTS_SUCCESS,
  posts,
})

export const allPostsError = error => ({
  type: ALL_POSTS_ERROR,
  error,
})
