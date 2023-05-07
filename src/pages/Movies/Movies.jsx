import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMoviesByName } from '../../api/api';
// import { Movies } from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const fetchedMovies = await fetchMoviesByName(searchQuery);

        setSearchedMovies(fetchedMovies.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <>
      <Searchbar onSubmitForm={query => setSearchQuery(query)} />

      {error ? <div>An error occurred, please try again later...</div> : null}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {searchedMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
