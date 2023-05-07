import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { fetchMoviesByName } from '../../api/api';
import { Movies } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

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

      {isLoading ? <Loader /> : <Movies movies={searchedMovies} />}
    </>
  );
};

export default MoviesPage;
