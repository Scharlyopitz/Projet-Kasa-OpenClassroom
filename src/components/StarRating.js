export default function StarRating({ rating }) {
    const maximumRating = [1, 2, 3, 4, 5];

    return (
        <div className="starRating-container">
            {maximumRating.map((value, index) =>
                rating >= value ? (
                    <span key={index}>
                        <i className="fa-solid fa-star"></i>
                    </span>
                ) : (
                    <span key={index}>
                        <i className="fa-solid fa-star grey-star"></i>
                    </span>
                )
            )}
        </div>
    );
}
