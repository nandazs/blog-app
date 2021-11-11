import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NewPostButton = () => (
  <Link to="/posts/new">
    <button className="newpost_button">New Post</button>
  </Link>
)

export default NewPostButton;