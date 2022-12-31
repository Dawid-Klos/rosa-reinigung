import React from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "../../styles/reviews.scss";

import Lines from "../../images/img-line-reviews.svg";
import Circles from "../../images/img-circles-bg.svg";
import reviewsCards from "./ReviewsCards";

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <h2 className="reviews__heading">Kundenmeinungen.</h2>
      <AwesomeSlider className="awesome-slider">{reviewsCards}</AwesomeSlider>
      <div className="reviews__image-wrapper">
        <img src={Lines} alt="Pink curved lines going around reviews" />
        <img src={Circles} alt="Purple circles as a visual detail in the background" />
      </div>
    </section>
  );
};

export default Reviews;
