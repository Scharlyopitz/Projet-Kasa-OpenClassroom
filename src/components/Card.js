import { Link } from "react-router-dom";

export default function Card({ id, cover, title }) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={cover} alt="image de couverture" className="cover" />
            <div className="card-effect"></div>
            <p>{title}</p>
        </Link>
    );
}
