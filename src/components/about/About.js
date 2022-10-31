import React from 'react';
import "../styles/about/About.scss"
import vek from "./../../assets/Vector.svg"
import men from "./../../assets/men.png"
import star from "./../../assets/star.svg"
import people from "./../../assets/people.svg"
import vec2 from "./../../assets/vec2.svg"
import text from '../../assets/BARBERS.svg'
const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about-general">
                    <div className="about-general__text">
                        <div className="about-general__line"></div>
                        <h1 className="about-general__title">ABOUT US</h1>
                        <div className="about-general__line2"></div>
                    </div>
                    <div className="about-general__block">
                        <div>
                            <h1 className="about-general__block--title">SINCE <br/>
                                2012</h1>
                            <div className="about-general__block--block">
                                <p className="about-general__block--desk">Due to our continued growth we are <br/> always on the look out for <br/> enthusiastic, hard-working trainees <br/> and talented barbers.</p>
                                <img className="about-general__block--block__images" src={vek} alt=""/>
                            </div>
                        </div>
                        <img className="about-general__block--img" src={men} alt=""/>
                        <div>
                            <div className="about-general__block--block">
                                <h1 className="about-general__block--block__title">20</h1>
                                <h1 className="about-general__block--block__title">YEARS OF
                                    EXPERIENCE</h1>
                                <div>
                                    <img src={star} alt=""/>
                                </div>
                            </div>
                            <div className="about-general__block--block">
                                <h1 className="about-general__block--block__title">12</h1>
                                <h1 className="about-general__block--block__title">ПРОФЕССИОНАЛОВ</h1>
                                <div>
                                    <img src={people} alt=""/>
                                </div>
                            </div>
                            <div className="about-general__block--block">
                                <img  className="about-general__block--block__images" src={vec2} alt=""/>
                                <p className="about-general__block--desk2">We will change your out looks! The <br/> Barber Shop Group offers <br/> comprehensive training (up to NVQ <br/> levels 2 and 3)</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;