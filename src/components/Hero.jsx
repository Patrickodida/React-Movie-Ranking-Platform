import React from "react";
import homeImage from '../images/ghostbusters-action-poster.webp'

function Hero(){
    return (
        <div>
            <section className="w-[90%] m-auto m-w-[1280px] text-center">
                <div className="hero-text">
                <h1 className="text-[3rem] font-bold">Movie Ranking Site</h1>
                <p className="text-[1.25rem] font-normal m-w-[700px] leading-2">Welcome to our curated collection of top-rated films, where every movie love can find something to cherish. our comprehensive rankings and reviews are here to guide you through the mesmerizing world of cinema.</p>
                </div>
                <div className="hero-image">
                    <img src={homeImage} alt="Ghostbusters" />
                </div>
            </section>
        </div>
    )
}
export default Hero;