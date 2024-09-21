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
            <li>
                <NavLink to="/Counter"> Counter </NavLink>
            </li>
            <li>
                <NavLink to="/Explorer"> Explorer </NavLink>
            </li>
            <li>
                <NavLink to="/Ratings"> Ratings </NavLink>
            </li>
        </ul>
    )
};

export default NavBar;