import { CATEGORIES_REQUEST, CATEGORIES_ERROR, CATEGORIES_SUCCESS } from '../types/categoriesTypes'

export const categoriesRequest = () => ({
  type: CATEGORIES_REQUEST,
})

export const categoriesSuccess = (categories) => ({
  type: CATEGORIES_SUCCESS,
  categories,
})

export const categoriesError = error => ({
  type: CATEGORIES_ERROR,
  error,
})
