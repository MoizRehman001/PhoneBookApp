import { Link } from "react-router-dom"
export const  Navbar = () => {
    <nav>
        <ul>
            <li><Link to={'/'}>Main</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/home'}>Home</Link></li>
        </ul>
    </nav>
}

