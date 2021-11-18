import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://mighty-retreat-24462.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div id="review">
      <div className="review-details my-5">
        <h3 className="text-center fw-bold">
          <span className="heading-color">What </span>Our Coustomer Says
        </h3>
        <div className="underline-div mx-auto mb-3"></div>
      </div>
      <Carousel variant="none" className="w-75 mx-auto mb-3">
        {reviews.map((review) => (
          <Carousel.Item className="text-center" key={review._id}>
            <p>{review.feedback}</p>
            {review?.star === "fiveStar" && (
              <>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
              </>
            )}
            {review?.star === "fourStar" && (
              <>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
              </>
            )}
            {review?.star === "threeStar" && (
              <>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
              </>
            )}
            {review?.star === "twoStar" && (
              <>
                <i class="fas fa-star text-warning"></i>
                <i class="fas fa-star text-warning"></i>
              </>
            )}
            {review?.star === "oneStar" && (
              <>
                <i class="fas fa-star text-warning"></i>
              </>
            )}
            <div className="underline-div mx-auto mt-3"></div>
            <h5 className="mt-2">{review.name}</h5>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Review;
