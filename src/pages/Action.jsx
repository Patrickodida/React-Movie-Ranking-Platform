import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Action(){

    return (
        <div id="action" className="bg-[#030637] text-[#f2f2f5]">
           <Navbar />
           <Hero />
           <Footer /> 
        </div>
    )
}
export default Action;