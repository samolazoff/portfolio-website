import './AppFooter.scss';

import {Link} from 'react-router';

const AppFooter = () => {
    return (
        <footer className='container app-footer'>
            <Link to = 'https://github.com/samolazoff' target="_blank">@Samolazoff</Link>
        </footer>
    );
};

export default AppFooter;