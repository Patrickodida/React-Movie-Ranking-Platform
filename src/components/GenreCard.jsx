import React from "react";

function GenreCard({ genre, image }){
    return (
        <div>
            <section className="movie-genre text-center bg-[#212846] rounded-lg">
                <img src={image} alt="" className="w-full rounded-t-lg" />
                <h2 className="pb-8 pt-4">{genre}</h2>
            </section>
        </div>
    )
}
export default GenreCard;