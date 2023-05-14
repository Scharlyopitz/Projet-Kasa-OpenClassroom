import { useState } from "react";

export default function Carrousel({ pictures }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [carrouselOff, setCarrouselOff] = useState(false);

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === pictures.length - 1 ? 0 : currentSlide + 1
        );
    };

    const previousSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
        );
    };

    const Off = pictures.length === 1 ? "carrouselOff" : null;

    return (
        <div className="carrousel">
            <span
                className={`carrousel-arrow-left ${Off}`}
                onClick={previousSlide}
            >
                <i className="fa-solid fa-chevron-left"></i>
            </span>
            {pictures.map((picture, index) => (
                <div key={index}>
                    {index === currentSlide && (
                        <img key={index} src={picture} alt="Image logement" />
                    )}
                </div>
            ))}
            <span
                className={`carrousel-arrow-right ${Off}`}
                onClick={nextSlide}
            >
                <i className="fa-solid fa-chevron-right"></i>
            </span>
            <div className="carrousel-slide-number">
                <p className={Off}>
                    {currentSlide + 1}/{pictures.length}
                </p>
            </div>
        </div>
    );
}