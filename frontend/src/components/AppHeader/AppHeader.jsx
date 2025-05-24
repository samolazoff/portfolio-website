import React from 'react';

import './AppHeader.scss';

import NavHeader from '../NavHeader/NavHeader';

const AppHeader = () => {
    return (
        <header className='app-header'>
            <div className="container">
                <h1 hidden>samolazoff</h1>
                <NavHeader/>
            </div>
            
        </header>
    );
};

export default AppHeader;