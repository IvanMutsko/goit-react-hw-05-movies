import { MoviesList, MovieItem, MovieLink } from './MovieList.styled';

export const Movies = ({ trendingMovies }) => {
  return (
    <MoviesList>
      {trendingMovies.map(movie => {
        return (
          <MovieItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`}>
              {movie.title ?? movie.name}
            </MovieLink>
          </MovieItem>
        );
      })}
    </MoviesList>
  );
};
