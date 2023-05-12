import Banner from "../components/Banner";
import Cards from "../components/Cards";
import image from "../assets/acc.png";
import Footer from "../components/Footer";

export default function Home() {
    const title = <p>Chez vous , partout et ailleurs</p>;

    return (
        <>
            <Banner image={image} title={title} />
            <Cards />
            <Footer />
        </>
    );
}
