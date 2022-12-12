import React from "react";

import Star from "../../images/icons/icon-star.svg";
import AvatarIcon from "../../images/avatar-woman.svg";
import AvatarIcon2 from "../../images/avatar-woman2.svg";
import Lines from "../../images/img-line-reviews.svg";
import Circles from "../../images/img-circles-bg.svg";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "../../styles/reviews.scss";

import reviews from "./reviews.json";

const reviewsCards = reviews.map((review, index) => {
    return (
        <div className="review-card" key={review.id}>
            <div className="review-card__avatar">
                <img src={index % 2 === 0 ? AvatarIcon : AvatarIcon2} alt="Avatar of user who written a review" />
            </div>
            <p className="review-card__name">{review.name}</p>
            <p className="review-card__comment">{review.comment}</p>
            <div className="review-card__stars">
                <img src={Star} alt="Purple star review score" />
                <img src={Star} alt="Purple star review score" />
                <img src={Star} alt="Purple star review score" />
                <img src={Star} alt="Purple star review score" />
                <img src={Star} alt="Purple star review score" />
            </div>
        </div>
    )
});

const Reviews = () => {
    return (
        <section id="reviews" className="reviews">
            <h2 className="reviews__heading">Kundenmeinungen.</h2>
            <AwesomeSlider className="awesome-slider">
                {reviewsCards}
            </AwesomeSlider>
            <div className="reviews__image-wrapper">
                <img src={Lines} alt="Pink curved lines going around reviews" />
                <img src={Circles} alt="Purple circles as a visual detail in the background" />
            </div>
        </section>
    )
}

export default Reviews;