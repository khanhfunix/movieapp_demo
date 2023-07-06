import { useEffect, useCallback, useState } from "react";
import classes from "./Banner.module.css";

const API_KEY = "3545d00fdf25c7cb7e47140b30fc6d87";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

const Banner = (props) => {
  const [movie, setMovie] = useState({});

  const fetchNetflixOriginals = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=3545d00fdf25c7cb7e47140b30fc6d87&page=1`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const movieRandom =
        data.results[Math.floor(Math.random() * data.results.length - 1)];

      setMovie(movieRandom);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNetflixOriginals();
  }, []);

  const inlineBackground = {
    // backgroundImage: "url(" + `${movie.backdrop_path}` + ")",
    backgroundImage:
      "url(" +
      "https://image.tmdb.org/t/p/original" +
      `${
        movie.backdrop_path === null ? movie.poster_path : movie.backdrop_path
      }` +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: "0.9",
  };

  return (
    <div className={classes.Banner} style={inlineBackground}>
      <div className={classes.BannerContent}>
        <h1>{movie.name}</h1>
        <div>
          <button>Play</button>
          <button>My List</button>
        </div>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
