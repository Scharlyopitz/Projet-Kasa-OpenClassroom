import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
    // Variable pour se mettre en haut de la page au clic
    const goToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <div className="header">
            <img src={logo} alt="logo Kasa" />
            <ul>
                <li>
                    <NavLink to="/" onClick={goToTop}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={goToTop}>
                        A Propos
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
