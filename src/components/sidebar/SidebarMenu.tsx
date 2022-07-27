import React from 'react'

const SidebarMenu = () => {
  return (
    <div className='sidebar-menu'>
        <div className="menu-block">
            <div className="menu-head">
                <span>Dashboard</span>
            </div>

            <ul>
                <li>
                    <a href="/">
                        <span className="las la-balance-scale"></span>
                        Finance
                    </a>
                </li>
                
                <li>
                    <a href="/">
                        <span className="las la-chart-pie"></span>
                        Analytics
                    </a>
                </li>
            </ul>

            <div className="menu-head">
                <span>Application</span>
            </div>

            <ul>
                <li>
                    <a href="/">
                        <span className="las la-calendar"></span>
                        Calendar
                    </a>
                </li>
                
                <li>
                    <a href="/">
                        <span className="las la-users"></span>
                        Contacts
                    </a>
                </li>

                <li>
                    <a href="/">
                        <span className="las la-shopping-cart"></span>
                        E-Commerce
                    </a>
                </li>
                
                <li>
                    <a href="/">
                        <span className="las la-envelope"></span>
                        Mailbox
                    </a>
                </li>

                <li>
                    <a href="/">
                        <span className="las la-check-circle"></span>
                        Task
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SidebarMenu