import React from "react";
import { Link } from "react-router-dom"

function GenreCard({ genre, image }){
    return (
        <div>
            <section className="movie-genre text-center bg-[#212846] rounded-lg text-[1.25rem] font-bold mb-12">
                <img src={image} alt="" className="w-full rounded-t-lg" />
                <h2 className="pb-8 pt-6">{genre}</h2>
            </section>
        </div>
    )
}
export default GenreCard;