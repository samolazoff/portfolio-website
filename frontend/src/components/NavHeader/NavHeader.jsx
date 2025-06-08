import './NavHeader.scss';

import NavItem from './NavItem';
import LangPanel from '../LangPanel/LangPanel';

import {useSelector} from 'react-redux';

const NavHeader = ({txtContent}) => {

    const menuOpen = useSelector((state) => state.interface.menuOpen);
    const txt = txtContent.header;
    
    return (
        <nav className={menuOpen ?'header-nav-mobile':'header-nav'}>
            <ul className={
                menuOpen ?'header-nav-items-mobile':'header-nav-items'
                }>
                {
                    txt.map((item, index) => (
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