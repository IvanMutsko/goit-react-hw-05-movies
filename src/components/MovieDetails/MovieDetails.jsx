import PropTypes from 'prop-types';
import { DetailsWrap, DetailsSubwrap } from './MovieDetails.styled';

export const MovieDetails = ({ movieData }) => {
  const { genres, overview, vote_average, poster_path, title } = movieData;

  const posterURL = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  return (
    <DetailsWrap>
      <img src={posterURL} alt={title} width="240" />
      <DetailsSubwrap>
        {' '}
        <h1>{title}</h1>
        <p>Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres?.map(genre => genre.name).join(', ')}</p>
      </DetailsSubwrap>
    </DetailsWrap>
  );
};

MovieDetails.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};
