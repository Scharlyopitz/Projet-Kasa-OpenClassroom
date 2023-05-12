import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo Kasa" />
            <ul>
                <li>
                    <NavLink to="/">Acceuil</NavLink>
                </li>
                <li>
                    <NavLink to="/about">A Propos</NavLink>
                </li>
            </ul>
        </div>
    );
}
