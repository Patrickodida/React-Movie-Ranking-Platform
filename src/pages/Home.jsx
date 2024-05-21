import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home(){
    return (
        <div className="bg-[#030637] text-[#f2f2f5]">
            <Navbar />
            <Hero />
        </div>
    )
}
export default Home;