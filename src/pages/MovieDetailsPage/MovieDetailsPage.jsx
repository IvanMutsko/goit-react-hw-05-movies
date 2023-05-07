import { useState, useEffect } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../../api/api';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [currentMovie, setCurrentMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const backLinkHref = location.state?.from ?? '/';

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
      <NavLink to={backLinkHref}>Go back</NavLink>

      {error ? <div>An error occurred, please try again later...</div> : null}

      {isLoading ? <div>Loading...</div> : null}

      <MovieDetails movieData={currentMovie} />

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
