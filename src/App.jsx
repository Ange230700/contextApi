import "./App.css";
import MoviesList from "./components/MoviesList";
import MovieContext from "./contexts/MovieContext";

function App() {
  const [movies, setMovies] = useState([
    {
      movie_id: 1,
      title: "The Shawshank Redemption",
      release_year: 1994,
    },
    {
      movie_id: 2,
      title: "The Godfather",
      release_year: 1972,
    },
    {
      movie_id: 3,
      title: "The Godfather: Part II",
      release_year: 1974,
    },
    {
      movie_id: 4,
      title: "The Dark Knight",
      release_year: 2008,
    },
    {
      movie_id: 5,
      title: "Harry Potter and the Sorcerers Stone",
      release_year: 2001,
    },
    {
      movie_id: 6,
      title: "Harry Potter and the Chamber of Secrets",
      release_year: 2002,
    },
    {
      movie_id: 7,
      title: "Harry Potter and the Prison of Azkaban",
      release_year: 2004,
    },
    {
      movie_id: 8,
      title: "Harry Potter and the Goblet of Fire",
      release_year: 2005,
    },
    {
      movie_id: 9,
      title: "Harry Potter and the Order of the Phoenix",
      release_year: 2007,
    },
    {
      movie_id: 10,
      title: "Harry Potter and the Half-Blood Prince",
      release_year: 2009,
    },
    {
      movie_id: 11,
      title: "Harry Potter and the Deathly Hallows: Part 1",
      release_year: 2010,
    },
    {
      movie_id: 12,
      title: "Harry Potter and the Deathly Hallows: Part 2",
      release_year: 2011,
    },
  ]);

  return (
    <MovieContext.Provider value={{ movies: movies }}>
      <MoviesList />
    </MovieContext.Provider>
  );
}

export default App;
