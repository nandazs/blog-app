
import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import NavBarMenu from '../NavBarMenu'
import {
  MenuOutlined,
} from '@ant-design/icons'
import './style.css'

const NavBar = () => {

  const navbarDOM = useRef(null);

  const onClick = () => {
    const navbar =  navbarDOM.current;;
    if(navbar.style.display !== "block") {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  }

  return(
    <>
      <div className="navbar_responsive">
        <Link to="/">
          <h1 className="navbar_header_responsive">Blog</h1>
        </Link> 
        <MenuOutlined className="menu_responsive" onClick={() => onClick()}/>
      </div>  
      <div className="navbar" ref={navbarDOM} >
        <header className="navbar_header">
          <Link to="/">
            <h1>Blog</h1>
          </Link> 
        </header>
        <NavBarMenu/>
        <footer className="navbar_footer">Created by Fernanda Sereno - 2021</footer>
      </div>
    </>
  );
}

export default NavBar;