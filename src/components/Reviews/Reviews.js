import React from "react";

import "../../styles/reviews.scss";
import ArrowRight from "../../images/icons/icon-double-arrow-right.svg";
import ArrowLeft from "../../images/icons/icon-double-arrow-left.svg";
import Star from "../../images/icons/icon-star.svg";
import AvatarIcon from "../../images/avatar-woman.svg";
import AvatarIcon2 from "../../images/avatar-woman2.svg";
import Lines from "../../images/img-line-reviews.svg";

const reviews = [
    {
        name: "Ava",
        comment: "\"Household cleaning by Rosa Reinigung is fantastic! Communication is quick, friendly, and professional. Rosa Reinigung performs regular household cleanings for me, as well as semi-annual window cleaning, and a one-off organization of some rooms. They are flexible and work to balance their services with my needs, schedule, and budget. The regular cleaning is such a relief for me and is exactly what I need.\"",
        avatar: AvatarIcon2
    },
    {
        name: "Kathrin",
        comment: "\"Der Service von Rosa Reinigung ist zu 100% zufriedenstellend. Die Reinigung erfolgt zügig, aber dennoch ausgesprochen gründlich. Sonderleistungen, wie z.B. Fensterreinigung oder Kühlschrankreinigung, können individuell nach Bedarf hinzu gebucht werden. Die Kommunikation erfolgt schnell und zuverlässig. Wir können Rosa Reinigung uneingeschränkt weiterempfehlen.\"",
        avatar: AvatarIcon
    },
    {
        name: "Ava",
        comment: "\"Household cleaning by Rosa Reinigung is fantastic! Communication is quick, friendly, and professional. Rosa Reinigung performs regular household cleanings for me, as well as semi-annual window cleaning, and a one-off organization of some rooms. They are flexible and work to balance their services with my needs, schedule, and budget. The regular cleaning is such a relief for me and is exactly what I need.\"",
        avatar: AvatarIcon2
    },
    {
        name: "Ava",
        comment: "\"Household cleaning by Rosa Reinigung is fantastic! Communication is quick, friendly, and professional. Rosa Reinigung performs regular household cleanings for me, as well as semi-annual window cleaning, and a one-off organization of some rooms. They are flexible and work to balance their services with my needs, schedule, and budget. The regular cleaning is such a relief for me and is exactly what I need.\"",
        avatar: AvatarIcon2
    },
    {
        name: "Kathrin",
        comment: "\"Der Service von Rosa Reinigung ist zu 100% zufriedenstellend. Die Reinigung erfolgt zügig, aber dennoch ausgesprochen gründlich. Sonderleistungen, wie z.B. Fensterreinigung oder Kühlschrankreinigung, können individuell nach Bedarf hinzu gebucht werden. Die Kommunikation erfolgt schnell und zuverlässig. Wir können Rosa Reinigung uneingeschränkt weiterempfehlen.\"",
        avatar: AvatarIcon
    },
    {
        name: "Ava",
        comment: "\"Household cleaning by Rosa Reinigung is fantastic! Communication is quick, friendly, and professional. Rosa Reinigung performs regular household cleanings for me, as well as semi-annual window cleaning, and a one-off organization of some rooms. They are flexible and work to balance their services with my needs, schedule, and budget. The regular cleaning is such a relief for me and is exactly what I need.\"",
        avatar: AvatarIcon2
    }
]

const Reviews = () => {
    return (
        <section id="reviews" className="reviews">
            <h2 className="reviews__heading">Kundenmeinungen.</h2>
            {/* <div className="revies-container-wrapper"> */}
                <div className="reviews-container">
                    {reviews.map(reviews => {
                        return (
                            <div className="review-card">
                                <div className="review-card__avatar">
                                    <img src={reviews.avatar} alt="Avatar of user who written a review" />
                                </div>
                                <p className="review-card__name">{reviews.name}</p>
                                <p className="review-card__comment">{reviews.comment}</p>
                                <div className="review-card__stars">
                                    <img src={Star} alt="Purple star review score" />
                                    <img src={Star} alt="Purple star review score" />
                                    <img src={Star} alt="Purple star review score" />
                                    <img src={Star} alt="Purple star review score" />
                                    <img src={Star} alt="Purple star review score" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            {/* </div> */}
            <div className="reviews-control">
                <div className="reviews-control__dots">
                    <span></span>
                    <span className="active-dot"></span>
                    <span></span>
                </div>
                <div className="reviews-control__arrows">
                    <img className="reviews-control__arrows--left" src={ArrowLeft} alt="Arrow left" />
                    <img className="reviews-control__arrows--right" src={ArrowRight} alt="Arrow right" />
                </div>
            </div>
            <div className="reviews__image-wrapper">
                <img src={Lines} alt="Pink curved lines going around reviews" />
            </div>
        </section>
    )
}

export default Reviews;