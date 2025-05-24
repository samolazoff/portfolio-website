import React from 'react';

import './NavHeader.scss';

import NavItem from './NavItem';

const dataNav = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'about',
        path: '/about'
    },
    {
        name: 'projects',
        path: '/projects'
    },
    {
        name: 'contacts',
        path: '/contacts'
    }

];

const NavHeader = () => {
    return (
        <nav className='header-nav'>
            <ul className='header-nav-items'>
                {
                    dataNav.map((item, index) => (
                        <NavItem name={item.name} path={item.path} key={index}/>
                    ))
                }
            </ul>
        </nav>
    );
};

import './NavHeader.scss';

export default NavHeader;