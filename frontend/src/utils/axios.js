import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL ?? 'https://api.moviereq.sayan.rocks',
});

export default instance;