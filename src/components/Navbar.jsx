import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom"

function Navbar(){
    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu =() => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="bg-[#720455] text-[#f2f2f2] ">
            <section className="flex justify-between w-[90%] m-auto m-w-[1280px] items-center  ">
                <h1 className="logo text-[3rem] font-[900] m-0">MRP</h1>
                <div className="flex items-center w-full justify-end md:hidden">
                    <Link onClick={toggleMenu} className="text-3xl">
                    <i class={`bx ${menuOpen ? 'bx-x font-bold' : 'bx-menu font-bold' }`}></i>
                    </Link>
                </div>
                <nav className="nav-links flex justify-between w-full text-[0.875rem] uppercase">
                    <ul className="primary-nav flex m-auto">
                        <li className="mr-4">
                            <Link to="/" className="">Home</Link>
                        </li>
                        <li className="mr-4">
                            <Link to="/" className="">Genres</Link>
                        </li>
                        <li className="mr-4">
                            <Link to="/" className="">Favourites</Link>
                        </li>
                        <li>
                            <Link to="/" className="">Contact Us</Link>
                        </li> 
                    </ul>

                    <ul className="secondary-nav flex items-center">
                        <li className="mr-4">
                            <Link to="/">Login</Link>
                        </li>
                        <li className="py-2 px-4 bg-[#4a0654] rounded-r-lg ">
                            <Link to="/" className="">Sign Up</Link>
                        </li>
                    </ul>

                </nav>
            </section>
        </div>
    )
}
export default Navbar;