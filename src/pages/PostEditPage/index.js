import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { postRequest } from '../../redux/actions/postActions'
import PostEdit from '../../components/PostEdit'

const PostEditPage = () => {
  const { id } = useParams();
  const post = useSelector(state => state.postReducer.post);
  const dispatch = useDispatch();

  useEffect(() => dispatch(postRequest(id)), [id, dispatch]);

  return <>
    <PostEdit {...post}/>
  </>
}

export default PostEditPage;