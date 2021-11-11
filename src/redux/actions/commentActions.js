import { COMMENT_REQUEST, COMMENT_ERROR, COMMENT_SUCCESS } from '../types/commentTypes'

export const commentRequest = (comment) => ({
  type: COMMENT_REQUEST,
  comment,
})

export const commentSuccess = (comment) => ({
  type: COMMENT_SUCCESS,
  comment,
})

export const commentError = (error) => ({
  type: COMMENT_ERROR,
  error,
})
