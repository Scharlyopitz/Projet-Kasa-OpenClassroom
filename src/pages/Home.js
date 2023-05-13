import Banner from "../components/Banner";
import Cards from "../components/Cards";
import image from "../assets/acc.png";
import Footer from "../components/Footer";
import TitlPage from "../components/TitlePage";

export default function Home() {
    const title = <p>Chez vous , partout et ailleurs</p>;

    const titleHomePage = `Home`;

    return (
        <>
            <TitlPage title={titleHomePage} />
            <Banner image={image} title={title} />
            <Cards />
            <Footer />
        </>
    );
}
