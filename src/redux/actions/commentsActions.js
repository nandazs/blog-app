import { COMMENTS_REQUEST, COMMENTS_ERROR, COMMENTS_SUCCESS } from '../types/commentsTypes'

export const commentsRequest = (postID) => ({
  type: COMMENTS_REQUEST,
  postID,
})

export const commentsSuccess = (comments) => ({
  type: COMMENTS_SUCCESS,
  comments,
})

export const commentsError = (error) => ({
  type: COMMENTS_ERROR,
  error,
})
