import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'
import './Sidebar.css'

const SidebarNav = styled.nav`
    background: #777;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const Sidebar = ({user, onSignOut}) => {
    const [ sidebar, setSidebar ] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    const closeSidebar = () => {
        sidebar ? setSidebar(false) : null
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
          <div onMouseLeave={closeSidebar}>
            <div className="nav">
              <div className="nav-text">
                <Link to='#'>
                  <FaIcons.FaBars className="nav-icon" onClick={showSidebar} />
                </Link>
                <div className="nav-links">
                    <Link className="links" to='/events/new/new'>Add Event</Link>
                </div>
                <div className="nav-user-name">
                  { user ? `Hello, ${user.first_name}` : 'sign in' }
                </div>
              </div>
            </div>
            <SidebarNav sidebar={sidebar}>
                <div className="sidebar-wrap">
                    <Link to='#'>
                        <FaIcons.FaTimes onClick={showSidebar} />
                    </Link>
                    {SidebarData.map((item, index) => {
                        // passing onSignOut is passed in from App.js and being passed through to SubMenu
                        return <SubMenu item={item} key={index} onSignOut={onSignOut} user={user} />
                    })}
                </div>
            </SidebarNav>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar
