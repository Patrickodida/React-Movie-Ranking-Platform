import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function FavMovieCard( {movie, image, rank, youtubeURL }){
    return (
        <div className="bg-[#030637]">
            <section className="text-center bg-[#212846] rounded-lg flex items-center text-[1.25rem] mb-12 ">
                <div className="movie-image w-[50%]">
                <img src={image} alt="" className="w-full rounded-tl-lg rounded-bl-lg" />
                </div>
                <div className="movie-text w-[50%] ">
                    <span className="py-1 px-2 bg-[#f2f2f2] text-[#720455] font-[900] rounded-3xl">{rank}</span>
                    <h2 className="pt-4 pb-6 font-bold ">{movie}</h2>
                    <a href={youtubeURL} target="_blank" rel="noopener noreferrer" className="py-2 px-8 bg-[#f2f2f2] text-[#030637] rounded-3xl hover:bg-[#030637] hover:text-[#720455]">Watch Now</a>
                </div>

            </section>
        </div>
    )
}
export default FavMovieCard;