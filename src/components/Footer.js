import logo from "../assets/logo-white.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <img src={logo} className="footer-logo" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
}
