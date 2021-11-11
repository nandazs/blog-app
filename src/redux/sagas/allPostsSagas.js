import { takeLatest, call, put, delay } from 'redux-saga/effects'
import axios from 'axios'
import { ALL_POSTS_REQUEST, ALL_POSTS_ERROR, ALL_POSTS_SUCCESS } from '../types/allPostsTypes'
import { allPostsError, allPostsSuccess } from '../actions/allPostsActions'

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: 'aaaaaaaaaa',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

function* onAllPostsRequestListener() {
  yield takeLatest(ALL_POSTS_REQUEST, function*() {
    try {
      const response = yield call(api.get, `/posts`)
      console.log("esse")
      console.log(response)
      yield put(allPostsSuccess(response.data))
    } catch (error) {
      yield put(allPostsError(error))
    }
  })
}

function* onAllPostsSuccessListener() {
  yield takeLatest(ALL_POSTS_SUCCESS, function*() {
    yield delay(5000)

    console.log('SUCESSO')
  })
}

function* onAllPostsErrorListener() {
  yield takeLatest(ALL_POSTS_ERROR, function() {
    console.log('ERROR')
  })
}

export function allPostsSagas() {
  return [
    onAllPostsRequestListener,
    onAllPostsSuccessListener,
    onAllPostsErrorListener
  ]
}
