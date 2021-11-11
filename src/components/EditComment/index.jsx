import React, {useRef} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { commentSuccess } from '../../redux/actions/commentActions'
import { editComment } from '../../services/api'

const EditComment = (props) => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const comment_body = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const comment = editedComment();
    editComment(id, comment).then((data) => {
      console.log(data);
      dispatch(commentSuccess(data));
      history.push(`/`);
    });
  }

  const editedComment = () => {
    const body = comment_body.current.value;
    const comment = {
      body: body ? body : props.body,
    }
    return comment;
  }

  return(
    <div className="body_container">
      <form id="formNewPost" className="post_form" onSubmit={(event) => onSubmit(event)}>
        <h2 className="form_title">Edit comment</h2>
        <div className="field_container">
          <label><span style={{color: 'red'}}>* </span>Comment:</label>
          <textarea ref={comment_body} placeholder={props.body} id="comment_body" className="form_field" name="body" style={{resize: 'vertical'}}></textarea>
        </div>
        <div className="field_container">
          <label><span style={{color: 'red'}}>* </span>Author:</label>
          <input placeholder={props.author} type="text" className="form_field" id="post_author" name="author" disabled/>
        </div>
          <button type="submit" className="btn_submit">Submit</button>
      </form>
    </div>
  );
}

export default EditComment;