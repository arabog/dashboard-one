import React from 'react'
import Photo from '../img/man.jpeg'

const MainSidebar = () => {
  return (
    <div className='sidebar-main' >
      <div className="sidebar-user">
        <img src={Photo} alt="sidebar-user" />

        <div>
          <h3>Peter Johnson</h3>
          <span>arababs2015@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default MainSidebar