import {NavLink} from 'react-router';

import {useSelector, useDispatch} from 'react-redux';
const NavItem = (props) => {

    const {path, name} = props;

    return (
        <li className='header-nav-item'>
            <NavLink
                to={path}
                className = {
                    ({ isActive }) =>(isActive ? "active" : "")
            }
            >
                {name}
            </NavLink>
        </li>
    );
};

export default NavItem;