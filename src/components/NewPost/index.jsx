
import React, {useRef} from 'react'
import { useDispatch } from 'react-redux'
import {useHistory } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import { postSuccess } from '../../redux/actions/postActions'
import { addPost } from '../../services/api'

const NewPost = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const post_title = useRef(null);
  const post_author = useRef(null);
  const post_body = useRef(null);
  const post_category = useRef(null);

  const onSubmit = () => {
    const post = createPost();
    addPost(post).then((data) => {
      dispatch(postSuccess(data))
    });
    history.push(`/`);
  }

  const createPost = () => {
    const title = post_title.current.value;
    const body = post_body.current.value;
    const author = post_author.current.value;
    const category = post_category.current.value;
    const idUUID = uuidv4().replaceAll("-", "");
    const timestamp = getTime();
    const post = {
      id: idUUID,
      timestamp: timestamp,
      title: title,
      body: body,
      author: author,
      category: category.toLowerCase(),
    }
    return post;
  }

  const getTime = () => {
    const now = Date.now();
    return now;
  }

  return (
    <div className="form_container">
      <form id="formNewPost" className="form" onSubmit={(event) => onSubmit(event)}>
        <h2 className="form_title">New Post</h2>
        <div className="field_container">
          <label><span style={{color: 'red'}}>* </span>Title:</label>
          <input ref={post_title} type="text" id="post_title" name="title" className="form_field" required/>
        </div>
        <div className="field_container">
          <label><span style={{color: 'red'}}>* </span>Body:</label>
          <textarea ref={post_body} id="post_body" className="form_field" name="body" style={{resize: 'vertical'}} required></textarea>
        </div>
        <div className="field_container">
          <label><span style={{color: 'red'}}>* </span>Author:</label>
          <input ref={post_author} type="text" className="form_field" id="post_author" name="author" required/>
        </div>
        <div className="field_container">
          <label><span style={{color: 'red'}}>* </span>Category:</label>
          <select name="categories" id="post_category" className="form_field">
            {props.categories.categories.map((category, index) => {
              return (<option ref={post_category} value={category.name} key={index}>{category.name}</option>)
            })}
          </select>
        </div>
        <button type="submit" className="btn_submit">Submit</button>
      </form>
    </div>
  )
}

export default NewPost;