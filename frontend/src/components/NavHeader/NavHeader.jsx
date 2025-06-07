import './NavHeader.scss';

import NavItem from './NavItem';
import LangPanel from '../LangPanel/LangPanel';

import {useSelector} from 'react-redux';

import dataTXT from '../../data/language.json';

// const dataNav = [
//     {
//         name: 'home',
//         path: '/'
//     },
//     {
//         name: 'about',
//         path: '/about'
//     },
//     {
//         name: 'projects',
//         path: '/projects'
//     },
//     {
//         name: 'blog',
//         path: '/blog'
//     },
//     {
//         name: 'contacts',
//         path: '/contacts'
//     }

// ];

const NavHeader = () => {

    const menuOpen = useSelector((state) => state.interface.menuOpen);
    const language = useSelector((state) => state.language.language);
    const dataNav = (language === 'EN') ? dataTXT.EU.header : dataTXT.RU.header;
    
    return (
        <nav className={menuOpen ?'header-nav-mobile':'header-nav'}>
            <ul className={
                menuOpen ?'header-nav-items-mobile':'header-nav-items'
                }>
                {
                    dataNav.map((item, index) => (
                        <NavItem 
                            name={item.name} 
                            path={item.path} 
                            key={index}/>
                    ))
                }
                <LangPanel/>
            </ul>
        </nav>
    );
};

import './NavHeader.scss';

export default NavHeader;