import { useEffect } from "react";

function MoviesCategory({ children, dispatch }) {
  useEffect(function () {
    const KEY = "5232240c";
    async function fetchMovie() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&type=movie`
      );
      const data = await res.json();
      console.log(data);
    }
    fetchMovie();
  }, []);
  return children;
}

export default MoviesCategory;

// `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`

// const KEY = "5232240c";
