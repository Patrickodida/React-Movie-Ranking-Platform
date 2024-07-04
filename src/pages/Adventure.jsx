import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FavMovieCard from "../components/FavMovieCard";
import Footer from "../components/Footer";
import adventureImage from '../images/Avatar-adventure-post-poster.webp';

function Adventure(){
    const [advenMovies, setAdvenMovies] = useState(null);
    // Fetch Adventure Movies
    const fetchAdvenMovies = () => {
        let apiAdvenMovies = "http://localhost:1337/api/movies?populate=*&filters[category][$eq]=Adventure"
        fetch(apiAdvenMovies)
        .then((response)=>{
            return response.json();
        })
        .then((advenMovieObjectData)=>{
            let advenMovieData = advenMovieObjectData.data;
            setAdvenMovies(advenMovieData);
        })
    }

    useEffect(()=>{
        fetchAdvenMovies();
    },[])

    return (
        <div id="adven" className="bg-[#030637] text-[#f2f2f5]">
            <Navbar />
            <Hero 
            title="Adventure Movies"
            description="Embark on an unforgettable journey into the heart of adventure with our selection of captivating adventure movies. From remote jungles to ancient ruins, from vast oceans to distant galaxies"
            image={adventureImage}
            />
            <h1 className="text-[#f2f2f5] mt-[1em] pb-8 text-center text-[1.875rem] md:text-[2.25rem] font-bold">Adventure Movies</h1>
            <section className="fav-movie grid md:grid-cols-2 grid-rows-1 md:gap-[2%] w-[90%] m-auto mb-4 pb-4">
                {advenMovies !== null ? (
                    advenMovies.map((item)=>{
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

export default Adventure;