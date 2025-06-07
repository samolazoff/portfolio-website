import './AppHeader.scss';

import NavHeader from '../NavHeader/NavHeader';

import {useSelector, useDispatch} from 'react-redux';
import {changeMenuBtn} from '../../features/interface/interfaceSlice';

import { Menu, X } from "lucide-react";

const AppHeader = () => {

    const dispatch = useDispatch();
    const menuOpen = useSelector((state) => state.interface.menuOpen)

    return (
        <header className='app-header'>
            <div className={!menuOpen?'container':'container_mobile'}>
                <h1 hidden>samolazoff</h1>
                <button
                    className='header-nav-btn'
                    onClick={ () => dispatch(changeMenuBtn())}
                >
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
                <NavHeader/>
            </div>
        </header>
    );
};

export default AppHeader;