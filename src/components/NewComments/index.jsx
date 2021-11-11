
import React, {useRef} from 'react';
import {v4 as uuidv4} from 'uuid';
import { useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { commentRequest } from '../../redux/actions/commentActions'

const NewComments = () => {
  const { id } = useParams();
  const { category } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const comment_author = useRef(null);
  const comment_body = useRef(null);

  const onSubmit = () => {
    const body = comment_body.current.value;
    const author = comment_author.current.value;
    const idUUID = uuidv4().replaceAll("-", "");
    const timestamp = getTime();
    dispatch(commentRequest({
      id: idUUID,
      parentId: id,
      timestamp: timestamp,
      body: body,
      author: author,
    }))
    history.push(`/${category}/${id}`);
  }

  const getTime = () => {
    const now = Date.now();
    return now;
  }

  return(
    <div className="form_container">
      <form className="form" id="formNewComment" onSubmit={(event) => onSubmit(event)}>
        <h2 className="form_title">New Comment</h2>
        <div className="field_container">
          <label><span style={{color: 'red'}}>* </span>Comment:</label>
          <input ref={comment_body} type="text" id="comment_body" name="comment_body" className="form_field"required/>
        </div>
        <div className="field_container">
          <label><span style={{color: 'red'}}>* </span>Author:</label>
          <input ref={comment_author} type="text" className="form_field" id="comment_author" name="comment_author" required/>
        </div>
        <button type="submit" className="btn_submit">Submit</button>
      </form>
    </div>
  );
}

export default NewComments;