
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import {
  DeleteOutlined,
  EditOutlined,
  LikeOutlined,
  DislikeOutlined,
  MessageOutlined,
} from '@ant-design/icons'
import { deleteComment, deletePost, voteComment, votePost } from '../../services/api'
import { useDispatch } from 'react-redux'
import { postSuccess } from '../../redux/actions/postActions'

const Model = (props) => {

  const dispatch = useDispatch();
  const [deleted, setDeleted] = useState(false);
  const [votes, setVotes] = useState(0);

  const vote = (id, option) => {
    if(props.element === "card" || props.element === "post") {
      votePost(id, option).then((data) => {
        dispatch(postSuccess(data))
        if(option === 'upVote') {
          setVotes(votes + 1);
        } else {
          setVotes(votes - 1);
        }
      })    
    } else {
      voteComment(id, option).then( () => {
        if(option === 'upVote') {
          setVotes(votes + 1);
        } else {
          setVotes(votes - 1);
        }
      })
    }
    
  }

  const disablePost = (id) => {
    if(props.element === "post" || props.element === "card") {
        deletePost(id).then(data => {
          dispatch(postSuccess(data));
          setDeleted(true);
        }
      );
    }

    if(props.element === "comment") {
      deleteComment(id).then(setDeleted(true));
    }
  }

  const date = () => {
    const now = Date.now();
    const milliseconds = now - props.timestamp;
    const seconds = (milliseconds / 1000).toFixed(0);
    let time = "";
  
    if(seconds < 60) {
      time = seconds + " seconds";
      return time;
    }

    if(seconds >= 60 && seconds < 3600) {
      time = (seconds / 60).toFixed(0) + " minutes";
      return time;
    }

    if(seconds >= 3600 && seconds < 86400) {
      time = (seconds / 3600).toFixed(0) + " hours";
      return time;
    }

    if(seconds >= 86400 && seconds < 604800 ) {
      time = (seconds / 86400).toFixed(0) + " days";
      return time;
    }

    if(seconds >= 604800 && seconds < 2592000) {
      time = (seconds / 604800).toFixed(0) + " weeks";
      return time;
    }

    if(seconds >= 2592000 && seconds < 31557600) {
      time = (seconds / 2592000).toFixed(0) + " months";
      return time;
    }

    if(seconds >= 31557600) {
      time = (seconds / 31557600).toFixed(0) + " years";
      return time;
    }
  }

  const headerItems = () => {
    return (
      <header className={"card_header"}>
        <h3 className={props.element+"_title"}>{props.title}</h3>
        <p className={"card_date"}>{date()} ago by <span style={{fontWeight: 'bold'}}>{props.author}</span></p>
      </header>
    )
  }
   
  const header = () => {
    if(props.element === "card") {
      return (
        <Link to={`/${props.category}/${props.id}`}>
          {headerItems()}
        </Link>
      )
    } 
    
    if(props.element === "post") {
      return headerItems();
    }

    if(props.element === "comment") {
      return(
        <header className={"card_header"}>
          <p className={"card_date"}>{date()} ago by <span style={{fontWeight: 'bold'}}>{props.author}</span></p>
        </header>
      )
    }
  }

  const actionAddComment = () => {
    if(props.element === "comment") {
      return;
    } else {
      return (
        <li className={"card_actions"}>
          <Link to={`/posts/${props.id}/comments/new`}>
            <MessageOutlined className="card_icons" />
          </Link>
        </li>
      )
    }
  }

  const actionEditPath = () => {
    if(props.element === 'card' || props.element === 'post') {
      return `/posts/${props.id}/edit`;
    } else {
      return `/posts/comments/${props.id}/edit`;
    }
  }

  const model = () => {
    if(!deleted) {
      return(
        <div className={props.element}>
          <div className={"card_container"}>
            <div>
              <div className={"card_votes"}>{props.voteScore + votes}</div>
            </div>
            {header()}
            <div className={props.element + "_body"}>
              <p>{props.body}</p>
            </div>
            <footer className={"card_footer"}> 
              <nav className={"card_nav"}>
                <ul className={"card_list"}>
                  <li className={"card_actions"}>
                    <DeleteOutlined className="card_icons" onClick={() => disablePost(props.id)}/>
                  </li>
                  <li className={"card_actions"}>
                    <Link to={actionEditPath()}>
                      <EditOutlined className="card_icons"/>
                    </Link>
                  </li>
                  <li className={"card_actions"}>
                    <LikeOutlined className="card_icons" onClick={() => vote(props.id, 'upVote')}/>
                  </li>
                  <li className={"card_actions"}>
                    <DislikeOutlined className="card_icons" onClick={() => vote(props.id, 'downVote')}/>
                  </li>
                  {actionAddComment()}
                </ul>
              </nav>
            </footer>
          </div>
        </div>
      );
    } else {
      return <span></span>
    }
  } 

  return model()
}

export default Model;