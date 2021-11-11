
import React, {useRef} from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import { postSuccess } from '../../redux/actions/postActions'
import { editPost } from '../../services/api'

const PostEdit = (props) => {

  const {id} = useParams();
  const {category} = useParams();
  const dispatch = useDispatch()
  const history = useHistory();
  const post_title = useRef(null);
  const post_body = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const post = createPost();
    editPost(id, post).then((data) => {
      dispatch(postSuccess(post))
      history.push(`/${category}/${id}`);
    });
  }

  const createPost = () => {
    const title = post_title.current.value;
    const body = post_body.current.value;
    const post = {
      timestamp: 1468479767190,
      title: title ? title : props.title,
      body: body ? body : props.body,
    }
    return post;
  }

  return(
    <div className="body_container">
      <form id="formNewPost" className="form" onSubmit={(event) => onSubmit(event)}>
        <h2 className="form_title">Edit Post</h2>
        <div className="field_container">
          <label><span style={{color: 'red'}}>* </span>Title:</label>
           <input ref={post_title} placeholder={props.title} type="text" id="post_title" name="title" className="form_field"/>
        </div>
        <div className="field_container">
          <label><span style={{color: 'red'}}>* </span>Body:</label>
          <textarea ref={post_body} placeholder={props.body} id="post_body" className="form_field" name="body" style={{resize: 'vertical'}}></textarea>
        </div>
        <div className="field_container">
          <label><span style={{color: 'red'}}>* </span>Author:</label>
          <input placeholder={props.author} type="text" className="form_field" id="post_author" name="author" disabled/>
        </div>
        <div className="field_container">
          <label><span style={{color: 'red'}}>* </span>Category:</label>
          <select name="categories" id="post_category" className="form_field" disabled>
            <option>{props.category}</option>
          </select>
        </div>
        <button type="submit" className="btn_submit" >Submit</button>
      </form>
    </div>
  );
}

export default PostEdit;