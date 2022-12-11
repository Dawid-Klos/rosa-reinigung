import React from "react";

import "../../styles/reviews.scss";
import Star from "../../images/icons/icon-star.svg";
import AvatarIcon from "../../images/avatar-woman.svg";
import AvatarIcon2 from "../../images/avatar-woman.svg";
import Lines from "../../images/img-line-reviews.svg";

const reviews = [
    {
        name: "Kathrin",
        stars: 5,
        comment: "\"Der Service von Rosa Reinigung ist zu 100% zufriedenstellend. Die Reinigung erfolgt zügig, aber dennoch ausgesprochen gründlich. Sonderleistungen, wie z.B. Fensterreinigung oder Kühlschrankreinigung, können individuell nach Bedarf hinzu gebucht werden . . .\"",
        avatar: AvatarIcon
    },
    {
        name: "Ava",
        stars: 5,
        comment: "Household cleaning by Rosa Reinigung is fantastic! Communication is quick, friendly, and professional. Rosa Reinigung performs regular household cleanings for me, as well as semi-annual window cleaning, and a one-off organization of some rooms . . .",
        avatar: AvatarIcon2
    }
]

const Reviews = () => {
    return (
        <section className="reviews">
            <h2 className="reviews__heading">Kundenmeinungen.</h2>
            <div className="reviews-container">
                {reviews.map(reviews => {
                    return (
                        <div className="review-card">
                            <div className="card-container">
                                <p className="card-container__name">{reviews.name}</p>
                                <div className="card-container__stars">
                                    <img src={Star} alt="Purple star review score" />
                                    <img src={Star} alt="Purple star review score" />
                                    <img src={Star} alt="Purple star review score" />
                                    <img src={Star} alt="Purple star review score" />
                                    <img src={Star} alt="Purple star review score" />
                                </div>
                                <p className="card-container__comment">{reviews.comment}</p>
                            </div>
                            <div className="review-card__avatar">
                                <img src={reviews.avatar} alt="Avatar of user who written a review" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="reviews__control">

            </div>
            <div className="reviews__image-wrapper">
                <img src={Lines} alt="Pink curved lines going around reviews" />
            </div>
        </section>
    )
}

export default Reviews;