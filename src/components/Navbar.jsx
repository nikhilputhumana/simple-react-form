import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    
    return (
        <nav>
            <Link to="/" className="logo">
                Site name
            </Link>
            
            <ul>
                <li className="nav-link ">
                    <NavLink 
                        to="/login"
                        className={({isActive}) =>
                            isActive ? "active" : ""
                        }>
                        Login
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink 
                        to="/signup" 
                        className={({isActive}) =>
                            isActive ? "active" : ""
                        }>
                        Signup
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}