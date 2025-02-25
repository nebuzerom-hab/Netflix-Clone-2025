import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../Utility/Axios/Axios";
import Requests from "../../Utility/Requests/Requests";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import play from "../../assets/assets/play_icon.png";
import info from "../../assets//info1.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const [error, setError] = useState("");
  const [showTrailer, setShowTrailer] = useState(false); // New state for full-screen trailer

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(Requests.fetchActionMovies);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  const playBtn = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      setShowTrailer(false); // Hide trailer if already playing
      setError("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          if (!url) {
            setError("No trailer found for this movie.");
            return;
          }

          try {
            const urlParams = new URLSearchParams(new URL(url).search);
            const videoId = urlParams.get("v");
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
    height: "400vh",
    width: "100%",
    playerVars: {
      autoplay: 1,
      origin: window.location.origin,
    },
  };

  // If showTrailer is true, display only the YouTube video
  if (showTrailer && trailerUrl) {
    return (
      <div className="trailer-container">
        <YouTube videoId={trailerUrl} opts={opts} />
        <button className="close-trailer" onClick={() => setShowTrailer(false)}>
          Close Trailer
        </button>
      </div>
    );
  }

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
          <Link to={`/Trail/${movie.id}`}>
            <button className="btn">
              <img className="play_btn" src={play} alt="Play" />
              Play
            </button>
          </Link>
          <button className="btn info-btn">
            {" "}
            <img src={info} />
            My List
          </button>
        </div>
      </div>
      {/* onClick={() => playBtn(movie)}*/}
      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
