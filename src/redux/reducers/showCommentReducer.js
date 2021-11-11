import { COMMENT_REQUEST, COMMENT_ERROR, COMMENT_SUCCESS } from '../types/commentTypes'

const INITIAL_STATE = {
  comment: {},
  error: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COMMENT_REQUEST:
      return { ...state, loading: true }
    case COMMENT_SUCCESS:
      return { ...state, loading: false, comment: action.comment}
    case COMMENT_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}
