import React from "react";
import "./Trail.css";
import { useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../Utility/Axios/Axios";
import Requests from "../../Utility/Requests/Requests";
import { useParams } from "react-router-dom";
const Trail = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { movieId } = useParams();
   const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // Use the movieDetailUrl in the Axios request
        const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
        const response = await axios.get(movieDetailUrl); // Make the request with Axios
        console.log(response.data);
        const movieData = response.data;
        console.log(movieId);

        setMovie(movieData); // Set the movie data in the state
        fetchTrailer(movieData); // Fetch the trailer after getting the movie details
      } catch (error) {
        console.log("Error fetching movie details:", error);
      }
    })();
  }, [movieId]);
  useEffect(() => {
    if (movie) {
      // Now that movie data is loaded, fetch the trailer
      fetchTrailer(movie)// Pass the full movie object to the fetchTrailer function
    }
  }, [movie]); // Run when the movie state changes

  const fetchTrailer = async (movie) => {
    console.log(movie);
    
    if (trailerUrl) {
      setTrailerUrl("");
      setShowTrailer(false); // Hide trailer if already playing
      setError("");
    } else {
      console.log(movieId)
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log("Trailer URL:", url);
          if (!url) {
            setError("No trailer found for this movie.");
            return;
          }

          try {
            const urlParams = new URLSearchParams(new URL(url).search);
            const videoId = urlParams.get("v");
            console.log(videoId)
            setTrailerUrl(videoId);
            setShowTrailer(true); // Show trailer in full screen
            setError("");
          } catch (e) {
            console.error("Error extracting video ID from the URL:", e);
            setError("Failed to load trailer.");
          }
        })
        .catch((error) => {
          console.error("Error fetching trailer:", error);
          setError("Error fetching trailer.");
        });
    }
  };

  const opts = {
    height: "600px", 
    width: "100%",
    playerVars: {
      autoplay: 1,
      origin: window.location.origin,
    },
  };

  // If showTrailer is true, display only the YouTube video
  if (showTrailer && trailerUrl) {
    return (
      <div
        className="trailer-container"
        style={{
          position: "fixed", // Position fixed so it fills the screen
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh", // Full viewport height
          backgroundColor: "black", // Optional, to make the background black for better visibility
          zIndex: 1000, // Ensure the trailer container is on top
        }}
      >
        <YouTube videoId={trailerUrl} opts={opts} />
        <button
          className="close-trailer"
         
          onClick={() => {
            setShowTrailer(false);
            setTrailerUrl("");
            navigate("/Home");
          }}
        >
          Close Trailer
        </button>
      </div>
    );
  }

  return <div></div>;
};

export default Trail;
