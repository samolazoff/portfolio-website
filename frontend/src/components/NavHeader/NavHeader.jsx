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
        name: 'blog',
        path: '/blog'
    },
    {
        name: 'contacts',
        path: '/contacts'
    }

];

const NavHeader = (props) => {

    const {isOpen} = props;

    return (
        <nav className={isOpen ?'header-nav-mobile':'header-nav'}>
            <ul className={
                isOpen ?'header-nav-items-mobile':'header-nav-items'
                }>
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