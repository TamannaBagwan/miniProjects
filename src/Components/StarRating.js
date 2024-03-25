import { useState } from "react";
import '../assets/starRating.css'

const StarRating = () => {
    const stars = [1, 2, 3, 4, 5]
    const [rating, setRating] = useState(0);

    const handleStarRating = (selectedStar) => {
        setRating(selectedStar)
    }
    return (
        <div className="star-rating">
            {stars.map((star) => (
                <span key={star}
                    className={`star ${star <= rating ? 'selected' : ''}`}
                    onClick={() => handleStarRating(star)}
                > ★</span>
            ))}
            <p> Your rating :  {rating} </p>
        </div>
    )
}

export default StarRating