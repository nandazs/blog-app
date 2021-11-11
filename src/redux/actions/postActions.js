import { POST_REQUEST, POST_SUCCESS, POST_ERROR } from '../types/postTypes'

export const postRequest = (id) => ({
  type: POST_REQUEST,
  id,
})

export const postSuccess = (post) => ({
  type: POST_SUCCESS,
  post,
})

export const postError = error => ({
  type: POST_ERROR,
  error,
})
