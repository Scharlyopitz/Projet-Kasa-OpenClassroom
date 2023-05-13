import { Link } from "react-router-dom";
import TitlePage from "../components/TitlePage";

export default function Error() {
    const titleErrorPage = `Error 404`;
    return (
        <>
            <TitlePage title={titleErrorPage} />
            <div className="error">
                <h1 className="error-number">404</h1>
                <p className="error-message">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <Link to="/" className="error-link">
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </>
    );
}
