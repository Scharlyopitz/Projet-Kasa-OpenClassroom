export default function Banner(props) {
    const image = props.image;
    const title = props.title;
    return (
        <div className="banner">
            <img src={image} alt="image Acceuil" />
            {title}
        </div>
    );
}
