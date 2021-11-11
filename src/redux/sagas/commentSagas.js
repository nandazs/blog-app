
import { takeLatest, put, delay } from 'redux-saga/effects'
import { COMMENT_REQUEST, COMMENT_SUCCESS, COMMENT_ERROR } from '../types/commentTypes'
import { commentError, commentSuccess } from '../actions/commentActions'

async function submitToServer(data) {
  try {
    let myString = JSON.stringify(data);
    let response = await fetch('http://localhost:3001/comments', {
      method: 'POST',
      headers: {
        Authorization: 'aaaaaaaaaa',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: myString,
    })
    let responseJSON = await response.json();
    return responseJSON;
  } catch(error) {
    console.log(error);
  }
}

function* onCommentRequestListener() {
  yield takeLatest(COMMENT_REQUEST, function*(action) {
    try {
      const response = yield submitToServer(action.comment);
      yield put(commentSuccess(response))
    } catch (error) {
      yield put(commentError(error))
    }
  })
}

function* onCommentSuccessListener() {
  yield takeLatest(COMMENT_SUCCESS, function*() {
    yield delay(5000)

    console.log('SUCESSO')
  })
}

function* onCommentErrorListener() {
  yield takeLatest(COMMENT_ERROR, function() {
    console.log('ERROR')
  })
}

export function commentSagas() {
  return [
    onCommentRequestListener,
    onCommentSuccessListener,
    onCommentErrorListener
  ]
}
