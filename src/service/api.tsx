import axios from "axios";
import { customAlert, errorAlert } from "../components/Alerts";

export const api = axios.create({
    baseURL: `https://api.github.com`
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        customAlert(`Oops...`, `Algo de errado aconteceu.`)
    }
)