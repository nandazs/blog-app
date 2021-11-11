
import React, {useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
import {
  TagOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { categoriesRequest } from "../../redux/actions/categoriesActions";
import { useSelector } from "react-redux";

const NavBarMenu = () => {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoriesReducer.categories);
  const loading = useSelector(state => state.categoriesReducer.loading);

  useEffect(() => {
    dispatch(categoriesRequest());
  },[dispatch])
  
  const categoriesItems = () => {
    if(!loading) {
      return categories.categories.map((category) => {
        return(
          <Link to={category.path} key={category.path}>
            <li className="navbar_item">
              <i className="item_icon">{<TagOutlined/>}</i>
              <span>{category.name}</span>
            </li>
          </Link>
        );
      })
    }
  }

  return(
    <div className="navbar_menu">
      <nav>
        <ul className="navbar_list">
          <Link to="/">
            <li className="navbar_item" key="/">
              <i className="item_icon">{<HomeOutlined/>}</i>
              <span>Home</span>
            </li>
          </Link>
          {categoriesItems()}  
        </ul>
      </nav>
    </div>
  );
}

export default NavBarMenu;