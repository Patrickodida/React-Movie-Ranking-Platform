import React from "react";

function Hero({ title, description, image }){
    return (
        <div>
            <section className="w-[90%] m-auto m-w-[1280px] text-center pt-32">
                <div className="hero-text">
                <h1 className="text-[2.25rem] md:text-[3rem] font-bold">{title}</h1>
                <p className="text-[0.875rem] md:text-[1.125rem] text-center p-8 font-normal md:w-[70%] leading-2 m-auto">{description}</p>
                </div>
                <div className="hero-image">
                    <img src={image} alt="Ghostbusters" className="w-full" />
                </div>
            </section>
        </div>
    )
}
export default Hero;