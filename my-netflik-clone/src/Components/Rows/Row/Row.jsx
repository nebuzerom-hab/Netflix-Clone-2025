import React, { useEffect, useState } from 'react'
import"./Row.css"
import axios from '../../../Utility/Axios/Axios'
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargerRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); //trailerUrl – Stores the YouTube video ID for the movie trailer.
  const [error, setError] = useState(""); // New state to track error
  const [showTrailer, setShowTrailer] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results); // data field is common because Axios automatically wraps the actual response inside an object, which includes metadata like status, headers, etc.
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setError(""); // Clear error when the trailer is reset
    } else {
      //The movieTrailer function (from the movie-trailer library) searches for the official YouTube trailer of a movie.It takes a movie title as input and returns a YouTube URL for the trailer.
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url);
          if (!url) {
            setError("No trailer found for this movie."); // Set error if no trailer
             setTrailerUrl("");
            return; // Exit if no trailer is found
          }

          try {
            const urlParams = new URLSearchParams(new URL(url).search);
            console.log(urlParams);
            const videoId = urlParams.get("v");
           console.log("Extracted Video ID: ", videoId);
            setTrailerUrl(videoId);
            
            setError("");
          } catch (e) {
            console.error("Error extracting video ID from the URL:", e);
            setError("Failed to load trailer.");
          }
        })
        .catch((error) => {
          console.error("Error fetching trailer:", error);
          setError("Error fetching trailer."); // Set error if there's an issue fetching the trailer
        });
      
      
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
       // Ensures YouTube API is enabled for interaction
      
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargerRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargerRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      {trailerUrl &&
      <div style={{ padding: "15px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        <button className="close-trailer" onClick={() => setTrailerUrl("") && setShowTrailer(false)}>
          Close Trailer
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Show error message */}
      </div>
}
    </div>
  );
};

export default Row
