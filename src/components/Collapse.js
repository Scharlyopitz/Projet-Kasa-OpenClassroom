import { useState } from "react";

export default function Collapse({ title, texte, id }) {
    const [isOpen, setisOpen] = useState(false);

    // Ajout des class si ouvert ou fermé

    let toggleDescription = isOpen ? null : "hide";

    let turnArrow = isOpen ? null : "turn";

    return (
        <div className="collapse-container">
            <div key={id} className="collapse">
                <div
                    onClick={() => setisOpen(!isOpen)}
                    className="collapse-title"
                >
                    <h3>{title}</h3>
                    <i className={`fa-solid fa-chevron-up  ${turnArrow}`}></i>
                </div>
                <div className="collapse-description">
                    <p className={toggleDescription}>{texte}</p>
                </div>
            </div>
        </div>
    );
}
