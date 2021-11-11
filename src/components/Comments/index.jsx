
import React from 'react'
import Model from '../Model'
import { useDispatch, useSelector } from 'react-redux'
import { commentsRequest } from '../../redux/actions/commentsActions'
import { getByParent } from '../../server/comments'
import './style.css'

const Comments = ({id}) => {

  const comments = useSelector(state => state.commentsReducer.comments);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getByParent(id).then(dispatch(commentsRequest(id)));
  }, [id, dispatch])

  return(
    <section className="comments_area">
      <h3  className="comments_area_title">Comments</h3>
      {
        comments.length === 0 ? <span>No comments. Publish a comment!</span> : 
        <ul className="comment_list">
          {comments.map((comment, index) => (
            <div className="comment_item">
              <Model {...comment} element="comment" key={index}/>
            </div>      
          ))}
        </ul>
      }
    </section>
  )   

}

export default Comments;
