import { useEffect, useState } from "react";
import { api } from "../service/api";
import GitHub from "../assets/img/github.svg"
import LinkedIn from "../assets/img/linkedin.svg"
import "./Style.css"

interface ProfileProps {
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
    blog: string
}

export function ProfilePage() {
    const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);
    useEffect(() => {
        document.title = 'Home · ProfilePage';

        api.get("/users/NewLeonardooliv").then(response => {
            setProfile(response.data);
        })
    }, []);

    return (
        <div className="profile-container">
            <div className="left-bar">
                <div className="name">
                    {profile.name}
                </div>
                <div className="profile-pic">
                    <img src={profile.avatar_url} alt="" />
                </div>
                <div className="bio">
                    {profile.bio}
                </div>
                <div className="social">
                    <a href={profile.html_url} target="_blank"></a>
                    <a href={profile.blog} target="_blank"></a>
                    <a href={profile.blog} target="_blank"></a>
                    <a href={profile.blog} target="_blank"></a>
                </div>
                <div className="line"></div>
                <div className="nav">
                    <li><a href="">Início</a></li>
                    <li><a href="">Portfólio</a></li>
                </div>
            </div>
            <div className="content">
                <div className="name">
                    <h2>{profile.name}</h2>
                </div>
            </div>
        </div>
    );
}