import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoriesRequest } from '../../redux/actions/categoriesActions'
import NewPost from '../../components/NewPost'
import Spinner from '../../components/Spinner'

const CreatePostPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoriesReducer.categories);
  const loading = useSelector(state => state.categoriesReducer.loading);

  useEffect(() => {
    dispatch(categoriesRequest());
  }, [dispatch])

  const createPost = () => {
    if(loading) {
      return <Spinner/>;
    } else {
      return <NewPost categories={categories}/>
    }
  }

  return createPost();
}

export default CreatePostPage;
