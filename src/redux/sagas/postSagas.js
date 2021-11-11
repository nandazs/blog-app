
import { takeLatest, call, put, delay } from 'redux-saga/effects'
import axios from 'axios'
import {POST_REQUEST, POST_SUCCESS, POST_ERROR } from '../types/postTypes'
import { postError, postSuccess } from '../actions/postActions'

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: 'aaaaaaaaaa',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

function* onPostRequestListener() {
  yield takeLatest(POST_REQUEST, function*(action) {
    try {
      const response = yield call(api.get, `/posts/${action.id.toLowerCase()}`)
      console.log(response);
      yield put(postSuccess(response.data))
    } catch (error) {
      yield put(postError(error))
    }
  })
}

function* onPostSuccessListener() {
  yield takeLatest(POST_SUCCESS, function*() {
    yield delay(5000)

    console.log('SUCESSO')
  })
}

function* onPostErrorListener() {
  yield takeLatest(POST_ERROR, function() {
    console.log('ERROR')
  })
}

export function postSagas() {
  return [
    onPostRequestListener,
    onPostSuccessListener,
    onPostErrorListener
  ]
}
