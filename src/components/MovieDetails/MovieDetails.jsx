export const MovieDetails = ({ movieData }) => {
  const posterURL = movieData.poster_path
    ? `https://image.tmdb.org/t/p/w400/${movieData.poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  return (
    <>
      <img src={posterURL} alt={movieData.original_title} width="240" />
      <h1>{movieData.original_title}</h1>

      <p>Score: {movieData.vote_average}</p>

      <h2>Overview</h2>
      <p>{movieData.overview}</p>

      <h2>Genres</h2>

      <p>{movieData.genres?.map(genre => genre.name).join(', ')}</p>
    </>
  );
};
