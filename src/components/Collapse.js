import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Collapse({ title, texte, id }) {
    const [isOpen, setisOpen] = useState(false);

    const [aboutPage, setAboutPage] = useState(false);

    // Information URL de la page
    const location = useLocation();

    // aboutPage qui passe à true si on est sur la page about
    useEffect(() => {
        if (location.pathname === "/about") {
            setAboutPage(true);
        }
    });

    // Ajout des class si ouvert ou fermé
    let toggleDescription = isOpen ? null : "hide";

    let turnArrow = isOpen ? null : "turn";

    return (
        <div key={id} className={aboutPage ? "collapse" : "collapse-logement"}>
            <div
                onClick={() => setisOpen(!isOpen)}
                className={
                    aboutPage ? "collapse-title" : "collapse-title-logement"
                }
            >
                <h3>{title}</h3>
                <i className={`fa-solid fa-chevron-up  ${turnArrow}`}></i>
            </div>
            <div
                className={
                    aboutPage
                        ? "collapse-description"
                        : "collapse-description-logement"
                }
            >
                <p className={toggleDescription}>{texte}</p>
            </div>
        </div>
    );
}
