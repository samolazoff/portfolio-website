import React from 'react';

import { Outlet } from 'react-router';
import AppHeader from '../AppHeader/AppHeader';

const Layout = () => {
    return (
        <>
            <AppHeader/>
                <main className='app-main'>
                    <Outlet/>
                </main>
            <footer>footer</footer>
        </>
    );
};

export default Layout;