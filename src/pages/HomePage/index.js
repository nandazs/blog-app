
import React, { useEffect } from 'react'
import Model from '../../components/Model'
import TopMenu from '../../components/TopMenu/TopMenu'
import Spinner from '../../components/Spinner'
import NoPosts from '../../components/NoPosts'
import { useDispatch, useSelector } from 'react-redux'
import { allPostsRequest } from '../../redux/actions/allPostsActions'

const HomePage = () => {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.allPostsReducer.posts);
  const loading = useSelector(state => state.allPostsReducer.loading)

  useEffect(() => {
    dispatch(allPostsRequest())
  },[dispatch])

  const allPosts = () => {
    if(loading) {
      return <Spinner/>;
    }
    
    if(posts.length === 0) {
      return <NoPosts/>
    } else {
      return <>
        {posts.map((post, index) => (
          <Model {...post} key={index} element="card"/>
        ))}
      </>
    }
  }
 
  return  (
    <>
      <TopMenu element="home"/>
      {allPosts()}
    </>
  )
    
}

export default HomePage;
