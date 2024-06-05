import React from "react";
import { Link } from 'react-router-dom'

function Footer(){
    return (
        <div className="footer bg-[#212846] py-20">
            <section className="footer-section flex flex-col md:flex-row md:justify-between w-[90%] m-auto">
                <div className="footer-links text-center mb-6">
                    <h3 className="text-[1.65rem] font-bold mb-4">Movie Links</h3>
                    <ul>
                        <li className="text-[1.1rem] mb-2 hover:text-[#720455] transition-colors duration-300 ">
                            <Link>MRP Home page</Link>
                        </li>
                        <li className="text-[1.1rem] mb-2 hover:text-[#720455] transition-colors duration-300 ">
                            <Link>MRP latest reviews</Link>
                        </li>
                        <li className="text-[1.1rem] mb-2 hover:text-[#720455] transition-colors duration-300 ">
                            <Link>Browse movies</Link>
                        </li>
                        <li className="text-[1.1rem] hover:text-[#720455] transition-colors duration-300">
                            <Link>Find new channels</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-links text-center mb-6">
                    <h3 className="text-[2.25rem] font-bold mb-1">MRP</h3>
                    <ul>
                        <li className="text-[1.1rem] mb-2 hover:text-[#720455] transition-colors duration-300">
                            <Link>About MRP</Link>
                        </li>
                        <li className="text-[1.1rem] mb-2 hover:text-[#720455] transition-colors duration-300">
                            <Link>Advertise on MRP</Link>
                        </li>
                        <li className="text-[1.1rem] mb-2 hover:text-[#720455] transition-colors duration-300">
                            <Link>Terms of service</Link>
                        </li>
                        <li className="text-[1.1rem] mb-2 hover:text-[#720455] transition-colors duration-300">
                            <Link>Get youtube data</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-social-links">
                    <h3 className="text-[1.65rem] font-bold mb-8 flex justify-center">Contact Us</h3>
                    <ul className="social-links flex justify-center">
                        <li className="mr-4" >
                            <Link><i className='bx bxl-twitter text-[1.75rem] text-[#720455] hover:opacity-75'></i></Link>
                        </li>
                        <li className="mr-4">
                            <Link><i className='bx bxl-linkedin text-[1.75rem] text-[#720455] hover:opacity-75' ></i></Link>
                        </li>
                        <li className="mr-4">
                            <Link><i className='bx bxl-instagram text-[1.75rem] text-[#720455] hover:opacity-75'></i></Link>
                        </li>
                        <li className="">
                            <Link><i className='bx bxl-facebook text-[1.75rem] text-[#720455] hover:opacity-75' ></i></Link>
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="border-t border-gray-600 shadow-md my-10 w-[90%] m-auto mb-0"></hr>
            <section className="footer form w-[90%] m-auto">
                <div className="news-letter pt-20 text-center md:text-left">
                    <form>
                        <label className="text-[1.1rem] mr-4">Subscribe To Our NewsLetter</label>
                        <input type="text" placeholder="Email" className="border-0 outline-none mr-2 py-2 px-1 md:w-[40%] placeholder:text-[#030637] text-[1.25rem] text-[#030637] mt-4 md:mt-0 w-full mb-4 md:mb-0" />
                        <button type="submit" className="bg-[#f2f2f5] text-[#030637] border-0 outline-none py-2 px-4 text-[1.25rem] hover:bg-[#030637] hover:text-[#f2f2f5] transition-colors duration-300 hover:border w-[50%] md:w-[10%]">Submit</button>
                    </form>
                </div>
            </section>

        </div>
    )
}
export default Footer;