import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { categoryRequest } from '../../redux/actions/categoryActions'
import Model from '../../components/Model'
import NoPosts from '../../components/NoPosts'
import Spinner from '../../components/Spinner'
import TopMenu from '../../components/TopMenu/TopMenu'

const CategoryPostPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const posts = useSelector(state => state.categoryReducer.posts );
  const loading = useSelector(state => state.categoryReducer.loading );

  useEffect(() => {
      dispatch(categoryRequest(category));
  }, [dispatch, category])

  const categoryPosts = () => {

    if(loading) {
      return <Spinner/>
    }
    
    if(posts.length === 0) {
      return <NoPosts/>
    } else {
      return posts.map((post, index) => (
        <Model {...post} element="card" key={index} />
      )) 
    }
  }

  return (
    <>
      <TopMenu element="category"/>
      {categoryPosts()}
    </>
  )
}

export default CategoryPostPage;
