import React from 'react';

import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <>
            <header>Header</header>
                <main className='app-main'>
                    <Outlet/>
                </main>
            <footer>footer</footer>
        </>
    );
};

export default Layout;