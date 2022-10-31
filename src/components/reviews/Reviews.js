import React from 'react';
import "../styles/reviews/Reviews.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div id="reviews">
            <div className="container">
                <div className="reviews-general">
                    <div className="reviews-general__text">
                        <div className="reviews-general__line"></div>
                        <h1 className="reviews-general__title">REVIEWS</h1>
                        <div className="reviews-general__line2"></div>
                    </div>
                    <Slider {...settings}>
                        <div className='slider items'>1</div>
                        <div className='slider items'>2</div>
                        <div className='slider items'>3</div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Reviews;