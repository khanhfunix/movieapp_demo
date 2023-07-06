import React, { useEffect, useState } from "react";
import NavBar from "../browse/NavBar/NavBar";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [clickSubmit, setClickSubmit] = useState(false);
  const [searchResult, setSearchResult] = useState("");

  const searchChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSearchResult(searchInput);
    setClickSubmit(true);
  };

  const clickSubmitHandler = () => {};

  const resetHandler = () => {
    setClickSubmit(false);
    setSearchInput("");
  };

  return (
    <div className="app">
      <NavBar />
      <SearchForm
        onChange={searchChangeHandler}
        onSubmit={submitHandler}
        onClick={clickSubmitHandler}
        onReset={resetHandler}
        value={searchInput}
      />
      {clickSubmit && <SearchResult searchResult={searchResult} />}
    </div>
  );
};

export default Search;
