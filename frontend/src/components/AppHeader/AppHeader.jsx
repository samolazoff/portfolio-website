import './AppHeader.scss';

import NavHeader from '../NavHeader/NavHeader';

import { useState } from 'react';
import {motion} from 'framer-motion';
import { Menu, X } from "lucide-react";

const AppHeader = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <header className='app-header'>
            <div className="container">
                <h1 hidden>samolazoff</h1>
                <NavHeader/>
                <button
                    className='header-nav-btn'
                    onClick={()=>setOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

            </div>
        </header>
    );
};

export default AppHeader;