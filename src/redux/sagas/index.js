import { createSaga } from './createSaga'
import { categorySagas } from './categorySagas'
import { postSagas } from './postSagas';
import { commentsSagas } from './commentsSagas';
import { commentSagas } from './commentSagas';
import { categoriesSagas } from './categoriesSagas';
import { allPostsSagas } from './allPostsSagas';

export default createSaga(
  ...categorySagas(),
  ...postSagas(),
  ...commentsSagas(),
  ...commentSagas(),
  ...categoriesSagas(),
  ...allPostsSagas(),
)
