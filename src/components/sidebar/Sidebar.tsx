import React from 'react'
import Brand from './Brand'
import MainSidebar from './MainSidebar'
import SidebarMenu from './SidebarMenu'

const Sidebar = () => {
  return (
    <div className='sidebar'>      
      <Brand />
      <MainSidebar />
      <SidebarMenu />
    </div>
  )
}

export default Sidebar