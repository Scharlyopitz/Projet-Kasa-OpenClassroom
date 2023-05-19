import logements from "../assets/backend.json";
import Footer from "../components/Footer";
import TitlePage from "../components/TitlePage";
import Error from "./Error";
import Collapse from "../components/Collapse";
import StarRating from "../components/StarRating";
import Carrousel from "../components/Carrousel";
import { useParams } from "react-router-dom";

export default function Logement() {
    // Information de l'ID dans l'URL de la page
    const { id } = useParams();

    // Recherche des items = à l'ID de la page
    const item = logements.find((logement) => logement.id === id);

    // Redirection vers la page d'erreur si l'id est incrorrect
    if (!item) {
        return <Error />;
    }

    // Paramètre du nom de la page
    const titleLogementPage = `${item.title}`;

    return (
        <>
            <TitlePage title={titleLogementPage} />
            <main>
                <Carrousel pictures={item.pictures} />
                <div className="information">
                    <div className="information-logement">
                        <h1 className="information-logement-title">
                            {item.title}
                        </h1>
                        <p className="information-logement-location">
                            {item.location}
                        </p>
                        <div className="information-logement-tag-container">
                            {item.tags.map((tag, index) => (
                                <p
                                    key={`${item.id}-${index}`}
                                    className="information-logement-tag"
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
                            <StarRating rating={item.rating} />
                        </div>
                    </div>
                </div>
                <div className="logement-collapse-container">
                    <Collapse title="Description" texte={item.description} />
                    <Collapse
                        title="Équipements"
                        texte={item.equipments.map((equipment, index) => (
                            <span key={index}>{equipment}</span>
                        ))}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}
