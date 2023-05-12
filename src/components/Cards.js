import logements from "../assets/backend.json";
import Card from "./Card";

export default function Cards() {
    return (
        <div className="cards-container">
            {logements.map((logement) => (
                <Card
                    key={logement.id}
                    id={logement.id}
                    cover={logement.cover}
                    title={logement.title}
                />
            ))}
        </div>
    );
}
