import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FavMovieCard from "../components/FavMovieCard";
import Footer from "../components/Footer";
import scifiImage from '../images/starwars-scifi1-poster.webp';

function Scifi(){
    const [scifiMovies, setScifiMovies] = useState(null);
    // Fetch scifi Movies
    const fetchScifiMovies = () => {
        let apiScifiMoviesurl = "http://localhost:1337/api/movies?populate=*&filters[category][$eq]=Sci-Fiction";
        fetch(apiScifiMoviesurl)
        .then((response)=>{
            return response.json();
        })
        .then((scifiMovieObjectData)=>{
            let scifiMovieData = scifiMovieObjectData.data;
            setScifiMovies(scifiMovieData);
        })
    }

    useEffect(()=>{
        fetchScifiMovies();
    },[])

    return (
        <div id="scifi" className="bg-[#030637] text-[#f2f2f5]">
            <Navbar />
            <Hero 
                title="Sci-Fiction Movies"
                description="Embark on a mind-bending journey through the cosmos with our selection of visionary science fiction movies. From futuristic dystopias to thrilling space odysseys, these films transport viewers to worlds beyond imagination and explore the limitless possibilities of science and technology."
                image={scifiImage}
            />
            <h1 className="text-[#f2f2f5] mt-[1em] pb-8 text-center text-[1.875rem] md:text-[2.25rem] font-bold">Sci-Fi Movies</h1>
            <section className="fav-movie grid md:grid-cols-2 grid-rows-1 md:gap-[2%] w-[90%] m-auto mb-4 pb-4">
                {scifiMovies !== null ? (
                    scifiMovies.map((item)=>{
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

export default Scifi;