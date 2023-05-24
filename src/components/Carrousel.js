import { useState } from "react";

export default function Carrousel({ pictures }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Variable pour la slide suivante
    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
        );
    };

    // Variable pour la slide précédente
    const previousSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
        );
    };

    // Variable pour enlever les flèche et le nombre de slides si il n'y à que 1 photo
    const off = pictures.length === 1 ? "carrouselOff" : null;

    return (
        <div className="carrousel">
            <span
                className={`carrousel-arrow-left ${off}`}
                onClick={previousSlide}
            >
                <i className="fa-solid fa-chevron-left"></i>
            </span>

            <img src={pictures[currentSlide]} alt="Image logement" />

            <span
                className={`carrousel-arrow-right ${off}`}
                onClick={nextSlide}
            >
                <i className="fa-solid fa-chevron-right"></i>
            </span>
            <div className="carrousel-slide-number">
                <p className={off}>
                    {currentSlide + 1}/{pictures.length}
                </p>
            </div>
        </div>
    );
}
