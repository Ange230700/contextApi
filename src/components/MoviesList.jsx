import { useContext } from "react";
import MovieContext from "../contexts/MovieContext";

function MoviesList() {
  const { movies, setMovies } = useContext(MovieContext);

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
      {
        movies.length < 11 && (
            <button
                onClick={() =>
                setMovies([
                    ...movies,
                    {
                    movie_id: movies.length + 1,
                    title: `Harry Potter and the Deathly Hallows: Part 1`,
                    release_year: 2010,
                    },
                ])
                }
            >
                Add Movie
            </button>
        )
      }
    </div>
  );
}

export default MoviesList; 
