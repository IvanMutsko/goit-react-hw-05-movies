import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../../api/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const fetchedData = await fetchMovieCredits(movieId);
        setMovieCredits(fetchedData);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieData();
  }, [movieId]);

  return (
    <section>
      {error ? <div>An error occurred, please try again later...</div> : null}

      {isLoading ? <div>Loading...</div> : null}

      {movieCredits.cast?.map(actor => {
        return (
          <div key={actor.credit_id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={`${actor.name}`}
                width="150"
              />
            ) : (
              <img
                src={`https://via.placeholder.com/200x300?text=No+Image`}
                alt={`${actor.name} profile`}
                width="150"
              />
            )}
            <h3> {actor.name}</h3>
            <p>Character: {actor.character}</p>
          </div>
        );
      })}
    </section>
  );
};
