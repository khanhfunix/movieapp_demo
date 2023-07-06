import { useState, useEffect } from "react";

import MovieDetail from "../MovieDetail/MovieDetail";

import classes from "./HorizontalMovie.module.css";

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

const Action = (props) => {
  const [movie, setMovie] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [original_title, setOriginal_title] = useState("");
  const [release_date, setRelease_date] = useState("");
  const [vote_average, setVote_average] = useState("");
  const [overview, setOverview] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const fetchTrending = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3${requests.fetchActionMovies}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  const clickHandler = (
    id,
    original_title,
    release_date,
    vote_average,
    overview
  ) => {
    setMovieId(id);
    setOriginal_title(original_title);
    setRelease_date(release_date);
    setVote_average(vote_average);
    setOverview(overview);
    setIsOpen(movieId === id ? !isOpen : true);
  };
  return (
    <>
      <h1>Action</h1>
      <div className={classes.HorizontalDisplay}>
        {movie.map((e) => {
          return (
            <img
              key={e.id}
              alt={e.original_title}
              src={`https://image.tmdb.org/t/p/original${e.backdrop_path}` }
              onClick={() =>
                clickHandler(
                  e.id,
                  e.original_title,
                  e.release_date,
                  e.vote_average,
                  e.overview
                )
              }
              
            ></img>
          );
        })}
      </div>
      {isOpen && (
        <MovieDetail
          movieId={movieId}
          original_title={original_title}
          release_date={release_date}
          vote_average={vote_average}
          overview={overview}
        />
      )}
    </>
  );
};

export default Action;
