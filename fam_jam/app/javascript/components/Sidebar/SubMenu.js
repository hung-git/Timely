import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #632ce4;
        cursor: pointer;
    }
`;

const SubMenu = (props) => {
    const [ subNav, setSubnav ] = useState(false)

    const showSubnav = () => setSubnav(!subNav)

    return (
        <>
            <SidebarLink to={props.item.path} onClick={props.item.subNav && showSubnav}>
                <div>
                    {props.item.icon}
                    <SidebarLabel>{props.item.title}</SidebarLabel>
                </div>
                <div>
                    { props.item.subNav && subNav 
                        ? props.item.iconOpened 
                        : props.item.subNav 
                        ? props.item.iconClosed 
                        : null 
                        }
                </div>
            </SidebarLink>
            {subNav && props.item.subNav.map((e, index) => {
                return (
                    <DropdownLink to={e.path} key={index}>
                        {e.icon}
                        
                        {e.title === "Sign Out" ? <SidebarLabel onClick={props.onSignOut}>{e.title}</SidebarLabel> : <SidebarLabel>{e.title}</SidebarLabel>}
                    </DropdownLink>

                )
            }) }
        </>
    )
}

export default SubMenu
