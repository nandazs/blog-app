import { combineReducers } from 'redux';
import { reducer as postReducer } from './showPostReducer'
import { reducer as categoryReducer } from './showCategoryReducer'
import { reducer as commentsReducer } from './showCommentsReducer'
import { reducer as commentReducer } from './showCommentReducer'
import { reducer as categoriesReducer} from './showCategoriesReducer'
import { reducer as allPostsReducer } from './showAllPostsReducer';


export default combineReducers({
  postReducer,
  categoryReducer,
  commentsReducer,
  commentReducer,
  categoriesReducer,
  allPostsReducer,
});
