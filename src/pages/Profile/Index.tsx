import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { AtualPage, Bar, Bio, Container, Contents, Line, Name, Nav, Social } from "./Style";

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
        <Container>
            <Bar>
                <Name>
                    {profile.name}
                </Name>
                <img src={profile.avatar_url} alt="" />
                <Bio>
                    {profile.bio}
                </Bio>
                <Social>
                    <a href={profile.html_url} target="_blank"></a>
                    <a href={profile.blog} target="_blank"></a>
                    <a href={profile.blog} target="_blank"></a>
                    <a href={profile.blog} target="_blank"></a>
                </Social>
                <Line></Line>
                <Nav>
                    <AtualPage><a href="/">Início</a></AtualPage>
                    <li><a href="/repositories">Portfólio</a></li>
                    <li><a href="/resume">Currículo</a></li>
                </Nav>
            </Bar>
            <Contents>
                <h1>{profile.name}</h1>
                <h2>{profile.bio}</h2>
            </Contents>
        </Container>
    );
}