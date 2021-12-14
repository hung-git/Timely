import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const SubMenu = (props) => {
    const [ subNav, setSubNav ] = useState(false)

    const showSubNav = () => setSubNav(!subNav)

    return (
        <>
            <Link className="sidebar-link" to={props.item.path} onClick={props.item.subNav && showSubNav}>
                <div>
                    {props.item.icon}
                    <span className="sidebar-label">{props.item.title}</span>
                </div>
                <div>
                    { props.item.subNav && subNav 
                        ? props.item.iconOpened 
                        : props.item.subNav 
                        ? props.item.iconClosed 
                        : null 
                        }
                </div>
            </Link>
            {subNav && props.item.subNav.map((e, index) => {
                return (
                    <Link className="dropdown-link" to={e.path} key={index}>
                        {e.icon}
                        {e.title === "Sign Out" ? <span className="sidebar-label">{e.title}</span> : <span className="sidebar-label">{e.title}</span>}
                    </Link>

                )
            }) }
        </>
    )
}

export default SubMenu
