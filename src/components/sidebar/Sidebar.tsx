import React from 'react'
import Brand from './Brand'
import MainSidebar from './MainSidebar'
import SidebarMain from './SidebarMain'
import SidebarMenu from './SidebarMenu'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Brand />
      <MainSidebar />
      {/* <SidebarMain /> */}
      <SidebarMenu />
    </div>
  )
}

export default Sidebar