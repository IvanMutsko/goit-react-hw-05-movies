import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../api/api';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import { StyledLink, ButtonWrap } from './MovieDetailsPage.styled';
import { Loader } from 'components/Loader/Loader';
import { useRef } from 'react';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [currentMovie, setCurrentMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovie = async movieId => {
      try {
        setError(false);
        setIsLoading(true);

        const fetchedMovie = await fetchMovieById(movieId);

        setCurrentMovie(fetchedMovie);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie(movieId);
  }, [movieId]);

  return (
    <>
      <StyledLink to={backLinkHref.current}>Go back</StyledLink>

      {error ? <div>An error occurred, please try again later...</div> : null}

      {isLoading ? <Loader /> : <MovieDetails movieData={currentMovie} />}

      <ButtonWrap>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </ButtonWrap>

      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
