import React from 'react';
import "../styles/gallery/Gallery.scss"
import adam from "./../../assets/adam.png"
import img from "./../../assets/img3.png"
import img4 from "./../../assets/img4.png"
import girls from "./../../assets/adamdar.png"
const Gallery = () => {
    return (
        <div id="gallery">
            <div className="container">
                <div className="gallery-general">
                    <div className="gallery-general__text">
                        <div className="gallery-general__line"></div>
                        <h1 className="gallery-general__title">GALLERY</h1>
                        <div className="gallery-general__line2"></div>
                    </div>
                    <div className="gallery-general__gen">
                        <div className="gallery-general__block">
                            <img src={adam} alt=""/>
                            <img src={girls} alt=""/>
                        </div>
                            <div className="gallery-general__img">
                                <img src={img} alt=""/>

                            </div>
                        <div className="gallery-general__img">
                            <img src={img4} alt=""/>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;