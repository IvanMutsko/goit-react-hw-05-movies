import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from '../../api/api';
import { Movies } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const { results } = await fetchMoviesByName(query);

        if (results.length === 0) {
          alert('No movies found');
          setSearchedMovies([]);
        } else {
          setSearchedMovies(results);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchParams]);

  return (
    <>
      <Searchbar onSubmitForm={query => setSearchParams({ query })} />

      {error ? <div>An error occurred, please try again later...</div> : null}

      {isLoading ? <Loader /> : <Movies movies={searchedMovies} />}
    </>
  );
};

export default MoviesPage;
