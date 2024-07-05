import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FavMovieCard from "../components/FavMovieCard";
import Footer from "../components/Footer";
import comedyImage from '../images/the_pickup_eddie_murphy-comedy-poster.webp'

function Comedy(){
    const [comedyMovies, setComedyMovies] = useState(null);
    // Fetch Comedy movies
    const fetchComedyMovies =() => {
        let apiComedyMoviesUrl = "http://localhost:1337/api/movies?populate=*&filters[category][$eq]=Comedy";
        fetch(apiComedyMoviesUrl)
        .then((response)=>{
            return response.json();
        })
        .then((comedyMovieObjectData)=>{
            let comedyMovieData = comedyMovieObjectData.data;
            setComedyMovies(comedyMovieData);
        })
    }

    useEffect(()=>{
        fetchComedyMovies();
    },[]);

    return (
        <div id="comedy" className="bg-[#030637] text-[#f2f2f5]">
            <Navbar />
            <Hero 
                title="Comedy Movies"
                description="Get ready to laugh until your sides hurt with our selection of uproarious comedy movies! Step into a world where laughter is the best medicine and every scene is guaranteed to tickle your funny bone. From hilarious antics to side-splitting slapstick, these films deliver non-stop laughs and endless entertainment."
                image={comedyImage}
            />
            <h1 className="text-[#f2f2f5] mt-[1em] pb-8 text-center text-[1.875rem] md:text-[2.25rem] font-bold">Adventure Movies</h1>
            <section className="fav-movie grid md:grid-cols-2 grid-rows-1 md:gap-[2%] w-[90%] m-auto mb-4 pb-4">
                {comedyMovies !== null ? (
                    comedyMovies.map((item)=>{
                        return (
                            <FavMovieCard 
                                key={item.id}
                                movie={item.attributes.title}
                                image={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                                youtubeURL={item.attributes.youtubeURL}
                            />
                        )
                    })
                ):(
                    <p>Loading...</p>
                )}
            </section>
            <Footer />
        </div>
    )
}

export default Comedy;