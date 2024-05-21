import React from "react";
import { Link } from "react-router-dom"

function Navbar(){
    return (
        <div>
            <section className="">
                <h1 className="logo">MRP</h1>
                <nav className="nav-links">
                    <ul className="primary-nav">
                        <li>
                            <Link to="/" className="">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className="">Genres</Link>
                        </li>
                        <li>
                            <Link to="/" className="">Favourites</Link>
                        </li>
                        <li>
                            <Link to="/" className="">Contact Us</Link>
                        </li> 
                    </ul>

                    <ul className="secondary-nav">
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/">Sign Up</Link>
                        </li>
                    </ul>

                </nav>
            </section>
        </div>
    )
}
export default Navbar;