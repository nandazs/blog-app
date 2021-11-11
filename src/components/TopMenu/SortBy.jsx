import React, {useRef} from 'react';
import './style.css';
import { DownOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { categorySuccess } from '../../redux/actions/categoryActions';
import { useSelector } from 'react-redux';
import { allPostsSuccess } from '../../redux/actions/allPostsActions';
import { getAllPosts, getByCategory } from '../../services/api';
import { useParams } from 'react-router';

const SortBy = (props) => {
  const dispatch = useDispatch();
  const {category} = useParams();
  const postsCategory = useSelector(state => state.categoryReducer.posts);
  const postsHome = useSelector(state => state.allPostsReducer.posts);
  const sort_submenu = useRef(null);

  const openSubmenu = () => {
    const element = sort_submenu.current;
    if(element.classList.contains("display")) {
      element.classList.remove("display");
    } else {
      element.classList.add("display");
    }
  }

  const sortByVoteScore = () => {
    if(props.element === "home") {
      getAllPosts().then(
        data => {
          const newVetor = data.sort(function(a,b) {
            return (a.voteScore < b.voteScore) ? 1 : ((b.voteScore < a.voteScore) ? -1 : 0);
          })
          dispatch(allPostsSuccess([...newVetor]));
        }
      )

    } else {
      getByCategory(category).then(
        data => {
          const newVetor = data.sort(function(a,b) {
            return (a.voteScore < b.voteScore) ? 1 : ((b.voteScore < a.voteScore) ? -1 : 0);
          })
          dispatch(categorySuccess([...newVetor]));
        }
      )
    }
  }

  const sortByDateTime = () => {
    if(props.element === 'home') {
      const newVetor = postsHome.sort(function(a,b) {
        return (a.timestamp < b.timestamp) ? 1 : ((b.timestamp < a.timestamp) ? -1 : 0);
      })
      dispatch(allPostsSuccess([...newVetor]));
    } else {
      const newVetor = postsCategory.sort(function(a,b) {
        return (a.timestamp < b.timestamp) ? 1 : ((b.timestamp < a.timestamp) ? -1 : 0);
      })
      dispatch(categorySuccess([...newVetor]));
    } 
  }

  return(
    <div className="sort_container">
      <div className="sort_select" onClick={() => openSubmenu()}>
        <div>Sort by...</div>
        <div>
          <DownOutlined />
        </div>
      </div>
      <div ref={sort_submenu} id="sort_submenu" className="sort_submenu">
          <ul>
            <li className="sort_item" onClick={() => sortByVoteScore()}>Vote Score</li>
            <li className="sort_item" onClick={() => sortByDateTime()}>Date and Time</li>
          </ul>
      </div>
    </div>
  );
}

export default SortBy;
