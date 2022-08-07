import axios from "axios";

export const api = axios.create({
    baseURL: `https://api.github.com`
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        throw error
    }
)