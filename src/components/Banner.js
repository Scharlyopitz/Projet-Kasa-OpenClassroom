import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Banner({ image, title }) {
    const [aboutPage, setAboutPage] = useState(false);

    // Information URL de la page
    const location = useLocation();

    // aboutPage qui passe à true si on est sur la page about
    useEffect(() => {
        if (location.pathname === "/about") {
            setAboutPage(true);
        }
    });

    return (
        <div
            className={
                aboutPage ? "banner-container-about" : "banner-container"
            }
        >
            <div className={aboutPage ? "banner-about" : "banner"}>
                <img src={image} alt="image Acceuil" />
                {title}
            </div>
        </div>
    );
}
