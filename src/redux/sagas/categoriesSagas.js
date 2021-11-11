import { takeLatest, call, put, delay } from 'redux-saga/effects'
import axios from 'axios'
import { CATEGORIES_REQUEST, CATEGORIES_ERROR, CATEGORIES_SUCCESS } from '../types/categoriesTypes'
import { categoriesError, categoriesSuccess } from '../actions/categoriesActions'

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: 'aaaaaaaaaa',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

function* onCategoriesRequestListener() {
  yield takeLatest(CATEGORIES_REQUEST, function*() {
    try {
      const response = yield call(api.get, `/categories`)
      yield put(categoriesSuccess(response.data))
    } catch (error) {
      yield put(categoriesError(error))
    }
  })
}

function* onCategoriesSuccessListener() {
  yield takeLatest(CATEGORIES_SUCCESS, function*() {
    yield delay(5000)

    console.log('SUCESSO')
  })
}

function* onCategoriesErrorListener() {
  yield takeLatest(CATEGORIES_ERROR, function() {
    console.log('ERROR')
  })
}

export function categoriesSagas() {
  return [
    onCategoriesRequestListener,
    onCategoriesSuccessListener,
    onCategoriesErrorListener
  ]
}
