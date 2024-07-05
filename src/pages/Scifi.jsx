import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FavMovieCard from "../components/FavMovieCard";
import Footer from "../components/Footer";
import scifiImage from '../images/starwars-scifi1-poster.webp';

function Scifi(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Footer />

        </div>
    )
}

export default Scifi;