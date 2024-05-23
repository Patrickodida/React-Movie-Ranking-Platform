import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import homeImage from "../images/ghostbusters-action-poster.webp";
import GenreCard from "../components/GenreCard";
import Footer from "../components/Footer";


function Home() {
  const [genres, setGenres] = useState(null);

  const fetchData = () => {
    let apiUrl = "http://localhost:1337/api/genres?populate=*";
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((dataObject) => {
        let genreData = dataObject.data;
        setGenres(genreData);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#030637] text-[#f2f2f5]">
      <Navbar />
      <Hero
        title="Movie Ranking Site"
        description="Welcome to our curated collection of top-rated films, where every movie love can find something to cherish. our comprehensive rankings and reviews are here to guide you through the mesmerizing world of cinema."
        image={homeImage}
      />
      <h1 className="text-[#f2f2f5] mt-[3rem] pb-8 text-center text-[2.25rem] font-bold">Movie Genres</h1>
      <section className="grid grid-cols-4 gap-[5%] w-[90%] m-auto pb-16">
        { genres !== null ? (
            genres.map((item) => {
          return (
            <GenreCard
              key={item.id}
              genre={item.attributes.title}
              image={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
            />
          );
        })
        ) : (
            <p>Loading...</p>
        )
        }
      </section>
      <section class="footer">
        <Footer />
      </section>
    </div>
  );
}
export default Home;
