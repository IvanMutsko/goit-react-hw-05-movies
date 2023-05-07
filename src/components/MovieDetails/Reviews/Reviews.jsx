import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../../api/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const fetchedData = await fetchMovieReviews(movieId);
        setMovieReviews(fetchedData);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <section>
      {error ? <div>An error occurred, please try again later...</div> : null}
      {isLoading ? <Loader /> : null}

      {movieReviews.results?.map(review => {
        return (
          <div key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Reviews;
