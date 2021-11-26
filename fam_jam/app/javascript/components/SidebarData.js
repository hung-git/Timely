import React from 'react';

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '#',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Contacts',
                path: '#',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Group 1',
        path: '/groups/groups1',
        icon: <IoIcons.IoMdPeople />
    },
    {
        title: 'Group 2',
        path: '/groups/groups2',
        icon: <IoIcons.IoMdPeople />
    },
    {
        title: 'Group 3',
        path: '/groups/groups3',
        icon: <IoIcons.IoMdPeople />
    },
    {
        title: 'Events',
        path: '#',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Upcoming',
                path: '#',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Completed',
                path: '#',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Team',
        path: '#',
        icon: <AiIcons.AiFillHome />
    }
]