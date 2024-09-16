import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <ul>
            <li>
                <NavLink to="/Home"> Home </NavLink>
            </li>
            <li>
                <NavLink to="/Books"> Books </NavLink>
            </li>
        </ul>
    )
};

export default NavBar;