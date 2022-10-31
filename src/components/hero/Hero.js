import React from 'react';
import "../styles/hero/Hero.scss"

const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero-general">
                    <div className='hero-general__text'>
                        <h1 className="hero-general__text__title">CONNECT WITH US +996141598</h1>
                    </div>
                    <div className="hero-general__btn">
                        <button>CALL</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;