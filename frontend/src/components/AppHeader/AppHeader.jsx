import './AppHeader.scss';

import NavHeader from '../NavHeader/NavHeader';

import { useState } from 'react';
import { Menu, X } from "lucide-react";

const AppHeader = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <header className='app-header'>
            <div className={!isOpen?'container':'container_mobile'}>
                <h1 hidden>samolazoff</h1>
                <button
                    className='header-nav-btn'
                    onClick={()=>setOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
                <NavHeader isOpen={isOpen}/>
            </div>
        </header>
    );
};

export default AppHeader;