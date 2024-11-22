import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTZlYjM0MjhhNDQ3NTRmN2M5NjJjMzMyNGE4NDNmMiIsIm5iZiI6MTczMjI4MzE1NS4zMDY4MjUsInN1YiI6IjY3MzRiOGQ0OTRhZmMzOWEyYTcwNGE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XB5ZoHcPLuZguEJDg9eMrvxvTbbJIY2dy4NIdxAtquo`,
  },
});

export default api;