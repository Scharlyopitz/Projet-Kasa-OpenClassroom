export default function StarRating({ rating }) {
    const ratingValues = [1, 2, 3, 4, 5];

    return (
        <div className="starRating-container">
            {ratingValues.map((value, index) =>
                rating >= value ? (
                    <span key={index}>
                        <i className="fa-solid fa-star"></i>
                    </span>
                ) : rating < value ? (
                    <span key={index}>
                        <i className="fa-solid fa-star grey-star"></i>
                    </span>
                ) : null
            )}
        </div>
    );
}
