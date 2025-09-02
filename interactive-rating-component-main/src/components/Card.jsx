import { useState } from "react";
import starIcon from "../images/icon-star.svg";
import illustration from "../images/illustration-thank-you.svg";
import "./Card.css";

function CardResumen({ onRatingSelect, selectedRating, onSubmit }) {
  return (
    <section className="card-container">
      <div className="star-container">
        <img src={starIcon} alt="estrella" />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="button-ranking">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            className={selectedRating === rating ? "selected" : ""}
            onClick={() => onRatingSelect(rating)}
          >
            {rating}
          </button>
        ))}
      </div>
      <div className="button-send">
        <button type="button" onClick={onSubmit} disabled={!selectedRating}>
          SUBMIT
        </button>
      </div>
    </section>
  );
}

function CardDetalle({ selectedRating }) {
  return (
    <section className="card-container thank-you">
      <div className="illustration-container">
        <img src={illustration} alt="illustration-thank-you" />
      </div>
      <div className="rating-display">You selected {selectedRating} out of 5</div>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </section>
  );
}

export default function Card() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="card-wrapper">
      {isSubmitted ? (
        <CardDetalle selectedRating={selectedRating} />
      ) : (
        <CardResumen
          onRatingSelect={handleRatingSelect}
          selectedRating={selectedRating}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}