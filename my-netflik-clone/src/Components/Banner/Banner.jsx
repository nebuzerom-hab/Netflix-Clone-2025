import React, { useEffect, useState } from "react";
import "./Banner.css"
import axios from "../../Utility/Axios/Axios";
import Requests from "../../Utility/Requests/Requests";
console.log(
  "Full Request URL:",
  axios.defaults.baseURL + Requests.fetchNetflixOriginals
);

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(Requests.fetchNetflixOriginals);
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);

        console.log(request.data.results); //The request object returned by Axios always contains data the result:
      } catch (error) {
        console.log("error", error);
      }
    })(); // Immediately Invoked Function Expression (IIFE)
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <h1 className="banner_description">
          {movie?.overview?.length > 150
            ? movie.overview.substring(0, 150) + "..."
            : movie?.overview}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">
            Play
          </button>
          <button className="banner_button">My List</button>
        </div>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
