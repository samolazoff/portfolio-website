import React from 'react';

import { Outlet } from 'react-router';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';

const Layout = () => {
    return (
        <>
            <AppHeader/>
            <main className='app-main'>
                <Outlet/>
            </main>
            <AppFooter/>
        </>
    );
};

export default Layout;