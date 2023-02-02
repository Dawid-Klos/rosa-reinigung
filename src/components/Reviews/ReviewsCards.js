import React from "react";

import Star from "../../images/icons/icon-star.svg";
import AvatarIcon from "../../images/avatar-woman.svg";
import AvatarIcon2 from "../../images/avatar-woman2.svg";
import reviews from "./reviews.json";

const reviewsCards = reviews.map((review, i) => {
  const stars = [];
  for (let j = 0; j < review.stars; j++) {
    stars.push(<img src={Star} alt="Purple star review score" />);
  }
  if (stars.length < 6) {
    for (let y = 0; y < 5 - review.stars; y++) {
      stars.push(<img className="review-card__stars--disabled" src={Star} alt="Purple star review score" />);
    }
  }
  return (
    <div className="review-card" key={review.id}>
      <div className="review-card__avatar">
        <img src={i % 2 === 0 ? AvatarIcon : AvatarIcon2} alt="Avatar of user who written a review" />
      </div>
      <p className="review-card__name">{review.name}</p>
      <p className="review-card__comment">{review.comment}</p>
      <div className="review-card__stars">{stars}</div>
    </div>
  );
});

export default reviewsCards;
