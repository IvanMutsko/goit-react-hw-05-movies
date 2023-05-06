import { useEffect } from 'react';
import { fetchTrendMovies } from '../../api/api';
import { Movie, MovieList, Title } from './Home.styled';

const Home = () => {
  const fetchMovies = async () => {
    try {
      const fetchedMovies = await fetchTrendMovies();
      console.log(fetchedMovies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <Title>Trending last week</Title>
      <MovieList>
        <Movie>dasasd</Movie>
      </MovieList>
    </>
  );
};

export default Home;
