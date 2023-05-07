import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MoviesList, MovieItem, MovieLink, TextWrap } from './MovieList.styled';

export const Movies = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {movies.map(movie => {
        const posterURL = movie.poster_path
          ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
          : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

        return (
          <MovieItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <img src={posterURL} alt={movie.original_title} width="240" />
              <TextWrap>{movie.title ?? movie.name}</TextWrap>
            </MovieLink>
          </MovieItem>
        );
      })}
    </MoviesList>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
