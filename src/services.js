export function fetchWithTimeout(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function fetchMovies() {
  return fetch("./data/movies.json")
    .then(response => response.json())
    .then(movies => movies)
    .catch(error => console.log(error));
}

export async function asyncFetchMovies() {
  try {
    // Fetch movies.
    const response = await fetch("/data/movies/json");

    // Transform the response into json results.
    const results = await response.json();

    // Return results.
    return results;
  }
  catch (error) {
    //console.log(error);
  }
}

export function fetchBooks() {
  return fetch("./data/books.json")
    .then(response => response.json())
    .then(books => books)
    .catch(error => console.log(error));
}

export async function asyncFetchBooks() {
  try {
    // Fetch movies.
    const response = await fetch("/data/books/json");

    // Transform the response into json results.
    const results = await response.json();

    // Return results.
    return results;
  }
  catch (error) {
    //console.log(error);
  }
}

export async function asyncFetchBookss() {
  throw new Error("test error.");
}