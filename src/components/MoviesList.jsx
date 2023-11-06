import { useContext } from "react";
import MovieContext from "../contexts/MovieContext";

function MoviesList() {
  const { movies } = useContext(MovieContext);

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.movie_id}>
            {movie.title} ({movie.release_year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList; 
