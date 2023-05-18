import { Link } from "react-router-dom";

export default function Card({ id, cover, title }) {
    // Variable pour se mettre en haut de la page au clic
    const goToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <Link to={`/logement/${id}`} onClick={goToTop} className="card">
            <img src={cover} alt="image de couverture" className="cover" />
            <div className="card-effect"></div>
            <p>{title}</p>
        </Link>
    );
}
