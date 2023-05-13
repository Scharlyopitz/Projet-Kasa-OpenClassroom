import logements from "../assets/backend.json";
import Footer from "../components/Footer";
import TitlePage from "../components/TitlePage";
import Error from "./Error";
import Collapse from "../components/Collapse";

import { useParams } from "react-router-dom";

export default function Logement() {
    // Information de l'ID dans l'URL de la page
    const { id } = useParams();

    // Recherche des items = à l'ID de la page
    const item = logements.find((logement) => logement.id === id);

    // Paramètre du nom de la page
    const titleLogementPage = `Logement`;

    // Redirection vers la page d'erreur si l'id est incrorrect
    if (!item) {
        return <Error />;
    }

    return (
        <>
            <TitlePage title={titleLogementPage} />
            <div className="information">
                <div className="information-appartement">
                    <h1 className="information-appartement-title">
                        {item.title}
                    </h1>
                    <p className="information-appartement-location">
                        {item.location}
                    </p>
                    <div className="information-appartement-tag-container">
                        {item.tags.map((tag, index) => (
                            <p
                                key={`${item.id}-${index}`}
                                className="information-appartement-tag"
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="host">
                    <div className="host-information-container">
                        <p className="host-information-name">
                            {item.host.name}
                        </p>
                        <img
                            className="host-information-picture"
                            src={item.host.picture}
                            alt="Photo du propriétaire"
                        />
                    </div>
                    <div className="host-rating">
                        <div className="host-rating-star">{item.rating}</div>
                    </div>
                </div>
            </div>
            <div className="appartement-collapse-container">
                <Collapse title="Description" texte={item.description} />
                <Collapse title="Équipements" texte={item.equipments} />
            </div>
            <Footer />
        </>
    );
}
