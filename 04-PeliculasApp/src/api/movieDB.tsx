import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'cc0b90931467ae243564a690969b3b99',
        language: 'es-ES'
    }
});

export default movieDB;