export default function Banner({ image, title }) {
    return (
        <div className="banner-container">
            <div className="banner">
                <img src={image} alt="image Acceuil" />
                {title}
            </div>
        </div>
    );
}
