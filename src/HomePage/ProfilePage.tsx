import { useEffect, useState } from "react";
import { api } from "../service/api";

type Profile = {
    login: string,
    id: number,
    avatar_url: string
    gravatar_id: string,
    html_url: string,
    repos_url: string,
    received_events_url: string,
    type: string,
    name: string,
    company: string,
    location: string,
    hireable: string,
    bio: string,
}

export function ProfilePage() {
    const [user, setProfile] = useState<Profile[]>([]);
    useEffect(() => {
        document.title = 'Home · ProfilePage';

        api.get("/users/NewLeonardooliv").then(response => {
            setProfile(response.data);
        })
    }, []);

    return (
        <div>
            <div className="profile-pic">
                <img src={user.avatar_url} alt="" />
            </div>
            {user.name}
        </div>
    );
}