import React from "react";
import { Link } from 'react-router-dom'

function Footer(){
    return (
        <div className="footer bg-[#212846]">
            <section className="footer-section flex justify-between w-[90%] m-auto">
                <div className="footer-links">
                    <h3>Movie Links</h3>
                    <ul>
                        <li>
                            <Link>MRP Home page</Link>
                        </li>
                        <li>
                            <Link>MRP latest reviews</Link>
                        </li>
                        <li>
                            <Link>Browse movies</Link>
                        </li>
                        <li>
                            <Link>Find new channels</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>MRP</h3>
                    <ul>
                        <li>
                            <Link>About MRP</Link>
                        </li>
                        <li>
                            <Link>Advertise on MRP</Link>
                        </li>
                        <li>
                            <Link>Terms of service</Link>
                        </li>
                        <li>
                            <Link>Get youtube data</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-social-links">
                    <h3>Contact Us</h3>
                    <ul className="social-links flex ">
                        <li>
                            <Link><i class='bx bxl-twitter'></i></Link>
                        </li>
                        <li>
                            <Link><i class='bx bxl-linkedin' ></i></Link>
                        </li>
                        <li>
                            <Link><i class='bx bxl-instagram'></i></Link>
                        </li>
                        <li>
                            <Link><i class='bx bxl-facebook' ></i></Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="footer form">
                <div>

                </div>
                <div>
                    <form>
                        <label>Subscribe To Our NewsLetter</label>
                        <input type="text" placeholder="Email" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>

        </div>
    )
}
export default Footer;