
import { takeLatest, call, put, delay } from 'redux-saga/effects'
import axios from 'axios'
import { COMMENTS_REQUEST, COMMENTS_SUCCESS, COMMENTS_ERROR } from '../types/commentsTypes'
import { commentsError, commentsSuccess } from '../actions/commentsActions'

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: 'aaaaaaaaaa',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

function* onCommentsRequestListener() {
  yield takeLatest(COMMENTS_REQUEST, function*(action) {
    try {
      const response = yield call(api.get, `/posts/${action.postID.toLowerCase()}/comments`)
      yield put(commentsSuccess(response.data))
    } catch (error) {
      yield put(commentsError(error))
    }
  })
}

function* onCommentsSuccessListener() {
  yield takeLatest(COMMENTS_SUCCESS, function*() {
    yield delay(5000)

    console.log('SUCESSO')
  })
}

function* onCommentsErrorListener() {
  yield takeLatest(COMMENTS_ERROR, function() {
    console.log('ERROR')
  })
}

export function commentsSagas() {
  return [
    onCommentsRequestListener,
    onCommentsSuccessListener,
    onCommentsErrorListener
  ]
}
