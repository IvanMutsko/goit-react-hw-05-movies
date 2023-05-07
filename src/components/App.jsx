import { Routes, Route } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import { Cast } from './MovieDetails/Cast/Cast';
import { Reviews } from './MovieDetails/Reviews/Reviews';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<div>Not found...</div>} />
        </Routes>
      </div>
    </Container>
  );
};
