import { useEffect, useState } from "react";
import { api } from "../service/api";


type Repository = {
    name: string,
    full_name: string,
    description: string,
    id: number
}

export function RepositoriesPage() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    useEffect(() => {
        document.title = 'Repositories · ProfilePage';

        api.get("/users/NewLeonardooliv/repos").then(response => {
            setRepositories(response.data);
        })
    }, []);

    return (
        <div>
            {repositories.map(repo => {
                return (
                    <div key={repo.id}>
                        <h1>{repo.name}</h1>
                        <p>{repo.description}</p>
                    </div>
                )
            })}
        </div>
    );
}