import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrendMovies } from '../../api/api';
import { Title } from './Home.styled';
import { Movies } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const fetchedMovies = await fetchTrendMovies();
        setTrendingMovies(fetchedMovies.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);
  return (
    <>
      <Title>Trending last week</Title>
      {error ? <div>An error occurred, please try again later...</div> : null}

      {isLoading ? <Loader/> : <Movies movies={trendingMovies} />}
    </>
  );
};

export default Home;
