import { api } from "../../service/api";

export async function getProfile(login: string) {
    const result = api.get("/users/NewLeonardooliv");

    return result;
}

export async function getProjects(login: string) {
    const result = api.get(login);

    return result;
}