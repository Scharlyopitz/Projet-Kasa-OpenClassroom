import logements from "../assets/backend.json";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

export default function Logement() {
    return (
        <>
            <div>
                {logements.map((logement) => (
                    <div key={logement.id} className="appartement">
                        <p>Bienvenue chez {logement.title} </p>
                    </div>
                ))}
                <Footer />
            </div>
        </>
    );
}
