import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FavMovieCard from "../components/FavMovieCard";
import Footer from "../components/Footer";
import romanceImage from '../images/moonlighting_romance-post-poster.gif'

function Romance(){
    const [romanceMovies, setRomanceMovies] = useState(null);
    // Fetch Romance Movies
    const fetchRomanceMovies = () => {
        let apiRomanceMoviesurl = "http://localhost:1337/api/movies?populate=*&filters[category][$eq]=Romance";
        fetch(apiRomanceMoviesurl)
        .then((response)=>{
            return response.json();
        })
        .then((romanceMovieObjectData)=>{
            let romanceMovieData = romanceMovieObjectData.data;
            setRomanceMovies(romanceMovieData);
        })
    }

    useEffect(()=>{
        fetchRomanceMovies();
    },[]);

    return (
        <div id="romance" className="bg-[#030637] text-[#f2f2f5]">
            <Navbar />
            <Hero 
                title="Romantic Movies"
                description="Indulge in the enchanting world of romance with our captivating selection of romantic movies. From sweeping love stories to heartwarming tales of connection, these films capture the essence of romance and celebrate the power of love in all its forms."
                image={romanceImage}
            />
            <h1 className="text-[#f2f2f5] mt-[1em] pb-8 text-center text-[1.875rem] md:text-[2.25rem] font-bold">Adventure Movies</h1>
            <section className="fav-movie grid md:grid-cols-2 grid-rows-1 md:gap-[2%] w-[90%] m-auto mb-4 pb-4">
                {romanceMovies !== null ? (
                    romanceMovies.map((item)=>{
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
                )}
            </section>
            <Footer />
        </div>
    )
}

export default Romance;