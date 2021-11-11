import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { postRequest } from '../../redux/actions/postActions'
import Model from '../../components/Model'
import Spinner from '../../components/Spinner'
import Comments from '../../components/Comments'

const PostPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector(state => state.postReducer.post);
  const loading = useSelector(state => state.postReducer.loading);

  useEffect(() => dispatch(postRequest(id)), [dispatch, id]);

  const isDeleted = () => {
    if(post.deleted) {
      history.push("/");
      return <></>;
    } else {
      return (
        <>
          <Model {...post} element="post"/>
          <Comments id={id}/>
        </>
      )
    }
  }

  const postPage = () => {
    if(loading) {
      return <Spinner/>
    } else {
      return isDeleted();
    }
  }

  return postPage();
}

export default PostPage;