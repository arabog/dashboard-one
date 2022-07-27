import React from 'react'
import Logo from "../img/logo.png"

const Brand = () => {
  return (
    <div className="sidebar-brand">
      <div className='brand-flex'>
          <img src={Logo} alt="logo" width="40px" />

          <div className="brand-icons">
              <span className="las la-bell"></span>
              <span className="las la-user-circle"></span>
          </div>
      </div>
    </div>
  )
}

export default Brand