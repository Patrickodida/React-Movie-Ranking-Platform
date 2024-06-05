import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom"

function Navbar(){
    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu =() => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="bg-[#720455] text-[#f2f2f2] fixed left-0 top-0 right-0 z-50 w-full ">
            <section className="relative flex justify-between w-[90%] m-auto m-w-[1280px] items-center ">
                <Link to="/" className="font-[900] text-[3rem]">
                    <span>MRP</span>
                </Link>
                <div className="flex items-center w-full justify-end md:hidden">
                    <Link onClick={toggleMenu} className="text-3xl">
                    <i className={`bx ${menuOpen ? 'bx-x font-bold' : 'bx-menu font-bold' }`}></i>
                    </Link>
                </div>
                <nav className={`absolute md:relative md:left-auto md:top-auto bg-[#720455] md:bg-transparent block md:flex flex-col md:flex-row md:items-center md:w-full top-10 md:top-5 right-0 left-0  pt-5 md:pt-0 pb-5 md:pb-0 mt-5 md:mt-0 ${menuOpen ? 'block' : 'hidden'} md:flex transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 uppercase `}>
                    <ul className="primary-nav flex flex-col md:flex-row m-auto font-bold text-center">
                        <li className="md:mr-4 mb-4 md:mb-0">
                            <Link to="/" className="">Home</Link>
                        </li>
                        <li className="md:mr-4 mb-4 md:mb-0">
                            <Link to="/" className="">Genres</Link>
                        </li>
                        <li className="md:mr-4 mb-4 md:mb-0">
                            <Link to="/" className="">Favourites</Link>
                        </li>
                        <li>
                            <Link to="/" className="">Contact Us</Link>
                        </li> 
                    </ul>

                    <ul className="secondary-nav flex flex-col md:flex-row items-center justify-center text-center mt-8 md:mt-0">
                        <li className="md:mr-4 mb-4 md:mb-0">
                            <Link to="/">Login</Link>
                        </li>
                        <li className="py-2 px-2 bg-[#4a0654] rounded-r-lg ">
                            <Link to="/" className="">Sign Up</Link>
                        </li>
                    </ul>

                </nav>
            </section>
        </div>
    )
}
export default Navbar;