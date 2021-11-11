
import React from 'react'
import SortBy from './SortBy'
import NewPostButton from './NewPostButton'

const TopMenu = (props) => (
  <div className="topmenu_container">
    <div className="topmenu">
      <SortBy element={props.element}/>
      <NewPostButton/>
    </div>
  </div>
)

export default TopMenu;