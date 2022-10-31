import React from 'react';
import "../styles/service/Service.scss"
import peop from "../../assets/peop.svg"

const Service = () => {
    return (
        <div id="service">
            <div className="container">
                <div className="service-general">
                    <div className="service-general__text">
                        <img className="service-general__text__img" src={peop} alt=""/>
                      <div className="service-general__text--group">

                          <h1 className="service-general__text--group__title">SERVICE</h1>

                      </div>
                    </div>
                    <div className="service-general__dis">
                        <div className="service-general__block">
                            <h1 className="service-general__block--title">Beard trims</h1>
                            <p className="service-general__block--dot">..............................</p>
                            <h1 className="service-general__block--dot">20$</h1>
                        </div>
                        <div className="service-general__block">
                            <h1 className="service-general__block--title">Close shaves</h1>
                            <p className="service-general__block--dot">..........................</p>
                            <h1 className="service-general__block--dot">30$</h1>
                        </div>
                        <div className="service-general__block">
                            <h1 className="service-general__block--title">Razor shaver</h1>
                            <p className="service-general__block--dot">..........................</p>
                            <h1 className="service-general__block--dot">15$</h1>
                        </div>
                        <div className="service-general__block">
                            <h1 className="service-general__block--title">Men’s haircut</h1>
                            <p className="service-general__block--dot">..........................</p>
                            <h1 className="service-general__block--dot">50$</h1>
                        </div>
                        <div className="service-general__block">
                            <h1 className="service-general__block--title">Clean cuts</h1>
                            <p className="service-general__block--dot">.................................</p>
                            <h1 className="service-general__block--dot">25$</h1>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;