import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import GenreCard from "../components/GenreCard"
import FavMovieCard from "../components/FavMovieCard";
import actionImage from '../images/rebel-moon-1-poster.webp'

function Action(){
    const [actionMovies, setActionMovies] = useState(null);
    // Fetch action movies
    const fetchActionMovies = () => {
        let apiActionMoviesUrl = "http://localhost:1337/api/movies?populate=*&filters[category][$eq]=Action";
        fetch(apiActionMoviesUrl)
        .then((response)=>{
            return response.json();
        })
        .then((actionMovieObjectData)=>{
            let actionMovieData = actionMovieObjectData.data;
            setActionMovies(actionMovieData);
        })
    }

    useEffect(()=>{
        fetchActionMovies();
    },[]);

    return (
        <div id="action" className="bg-[#030637] text-[#f2f2f5]">
           <Navbar />
           <Hero 
           title="Action Movies"
           description="Welcome to the adrenaline-fueled world of action movies, where heart-pounding thrills and jaw-dropping stunts collide to deliver an unforgettable cinematic experience."
           image={actionImage}
           />
           <h1 className="text-[#f2f2f5] mt-[1em] pb-8 text-center text-[1.875rem] md:text-[2.25rem] font-bold">Action Movies</h1>
           <section className="fav-movie grid md:grid-cols-2 grid-rows-1 md:gap-[2%] w-[90%] m-auto mb-4 pb-4">
            {actionMovies !== null ? (
                actionMovies.map((item)=>{
                    return (

                        <FavMovieCard
                        key={item.id}
                        movie={item.attributes.title}
                        image={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                        youtubeURL={item.attributes.youtubeURL}
                        />
                    )
                })
            ) : (
            <p>Loading...</p>
            )
            }
           </section>
           <Footer /> 
        </div>
    )
}
export default Action;