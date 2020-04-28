const api_key = `976e01968799491aab0415d107b09781`;
const id = 1;
export const getMoviesListById = () => fetch(`https://api.themoviedb.org/3/list/${id}?api_key=${api_key}`);