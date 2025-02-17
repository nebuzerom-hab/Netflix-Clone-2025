
const API_KEY = import.meta.env.VITE_API_KEY;
//const BaseUrlImg="https://image.tmdb.org/t/p/original";

const Requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
console.log("API Key:", API_KEY);

console.log("Requesting URL:", Requests.fetchNetflixOriginals);
export default Requests;
  