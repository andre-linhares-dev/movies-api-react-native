import axios from "axios";

const apiKey = 'e0eee4824088822e60cc7e2e89ba455b'

export const api = axios.create({
    baseURL: `https://api.themoviedb.org`
})