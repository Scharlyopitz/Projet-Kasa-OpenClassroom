import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="error">
            <h1 className="error-number">404</h1>
            <p className="error-message">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="error-link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}
