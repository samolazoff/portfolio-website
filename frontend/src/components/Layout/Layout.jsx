import { Outlet } from 'react-router';

import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';

const Layout = ({txtContent}) => {

    return (
        <>
            <AppHeader txtContent={txtContent}/>
            <main className='app-main'>
                <Outlet />
            </main>
            <AppFooter/>
        </>
    );
};

export default Layout;