import { useState } from "react";

import Action from "./MovieGenre/Action";
import Comedy from "./MovieGenre/Comedy";
import Documentaries from "./MovieGenre/Documentaries";
import Horror from "./MovieGenre/Horror";
import Original from "./MovieGenre/Original";
import TopRated from "./MovieGenre/TopRated";
import Trending from "./MovieGenre/Trending";
import MovieDetail from "./MovieDetail/MovieDetail";

const MovieList = (props) => {
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <>
      <Original />
      <Trending />
      <TopRated />
      <Action />
      <Comedy />
      <Horror />
      <Documentaries />
    </>
  );
};

export default MovieList;
