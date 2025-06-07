import {NavLink} from 'react-router';

import {useSelector, useDispatch} from 'react-redux';
import {changeMenuBtn} from '../../features/interface/interfaceSlice';

const NavItem = (props) => {

    const dispatch = useDispatch();
    const menuOpen = useSelector((state) => state.interface.menuOpen)

    const {path, name} = props;

    return (
        <li className='header-nav-item'>
            <NavLink
                to={path}
                className = {
                    ({ isActive }) =>(isActive ? "active" : "")
            }
            onClick={ () => dispatch(changeMenuBtn())}
            >
                {name}
            </NavLink>
        </li>
    );
};

export default NavItem;