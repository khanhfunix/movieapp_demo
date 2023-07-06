import { useState } from "react";
import { useEffect } from "react";

import classes from "./MovieDetail.module.css";

const MovieDetail = (props) => {
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${props.movieId}/videos?api_key=3545d00fdf25c7cb7e47140b30fc6d87`
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();

        let videoKey = "";

        for (let i = 0; i < data.results.length; i++) {
          if (
            data.results[i].type === "Trailer" ||
            data.results[i].type === "Teaser"
          ) {
            videoKey = data.results[i].key;
            break;
          }
        }

        setMovieDetail(videoKey);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetail();
  }, [props.movieId]);

  const src = `https://www.youtube.com/embed/${movieDetail}`;

  return (
    <div className={classes.MovieDetail}>
      <div>
        <h1>{props.original_title}</h1>
        <h3> Release Date : {props.release_date}</h3>
        <h3> Vote : {props.vote_average} / 10</h3>
        <p>{props.overview}</p>
      </div>
      <iframe width="100%" height="400" src={src}></iframe>
    </div>
  );
};

export default MovieDetail;
