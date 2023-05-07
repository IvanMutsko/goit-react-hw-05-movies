import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'bc10706c6695cbc040a40fff81bfdeeb';

export const fetchTrendMovies = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}/trending/all/week?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMoviesByName = async searchQuery => {
  try {
    const { data } = await axios.get(
      `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieById = async movieId => {
  try {
    const { data } = await axios.get(
      `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieCredits = async movieId => {
  try {
    const { data } = await axios.get(
      `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `${API_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
