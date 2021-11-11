import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import EditComment from '../../components/EditComment'
import { commentSuccess } from '../../redux/actions/commentActions'
import { getComment } from '../../services/api'

const EditCommentPage = () => {
  const { id } = useParams();
  const comment = useSelector(state => state.commentReducer.comment);
  const dispatch = useDispatch();

  useEffect(() => getComment(id).then(data => dispatch(commentSuccess(data))), [id, dispatch]);

  return <>
    <EditComment {...comment}/>
  </>
}

export default EditCommentPage;