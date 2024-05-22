import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import homeImage from '../images/ghostbusters-action-poster.webp'

function Home(){
    return (
        <div className="bg-[#030637] text-[#f2f2f5]">
            <Navbar />
            <Hero
                title="Movie Ranking Site"
                description="Welcome to our curated collection of top-rated films, where every movie love can find something to cherish. our comprehensive rankings and reviews are here to guide you through the mesmerizing world of cinema."
                image={homeImage}
             />
        </div>
    )
}
export default Home;