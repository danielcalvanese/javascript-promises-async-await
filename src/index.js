import { fetchWithTimeout, fetchMovies, fetchBooks, asyncFetchMovies, asyncFetchBooks } from './services';
const movies = require("./data/movies.json");

const getBooksAndMovies = () => {
  return Promise.all([fetchBooks(), fetchMovies()])
    .then(([books, movies]) => ({
      books,
      movies
    }))
    .catch(error => console.log("Error fetching books and movies", error));
};

const getBooksOrMovies = () => {
  return Promise.race([fetchBooks(), fetchMovies()])
    .then(results => results)
    .catch(error => console.log("Error waiting for the promise race", error));
};

const getBooksAndMoviesAsync = async () => {
  try {
    const [books, movies] = await Promise.all([asyncFetchBooks(), asyncFetchMovies()]);
    return { books, movies };
  }
  catch (error) {
    console.log("Error fetching books and movies", error);
    return error;
  }
};

async function getBooksOrMoviesAsync() {
  const values = await Promise.race([asyncFetchBooks(), asyncFetchMovies()]);
  return values;
};



const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then(results => { console.log("getBooksAndMoviesPromise", results); });

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then(results => { console.log("getBooksOrMoviesPromise", results); });

getBooksAndMoviesAsync()
  .then(results => {
    console.log("movies and books", {
      movies: results.movies,
      books: results.books
    });
  })
  .catch(error => {
    console.error("Error in getBooksAndMoviesAsync execution", error);
  });

getBooksOrMoviesAsync()
  .then(results => {
    console.log("movies OR books", {
      results
    });
  })
  .catch(error => {
    console.error("Error in getBooksOrMoviesAsync execution", error);
  });
