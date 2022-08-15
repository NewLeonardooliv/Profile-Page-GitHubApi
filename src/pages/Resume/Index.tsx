import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { socialMedias } from "../Profile/Index";
import { AtualPage, Bar, Bio, Container, Contents, Line, Name, Nav, Projects, Social } from "../Profile/Style";
import { List, Title } from "./Style";

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

export function Resume() {
    const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);
    useEffect(() => {
        document.title = 'Resume · ProfilePage';

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
                    <a href={socialMedias.GITHUB.url} target="_blank"><img src={socialMedias.GITHUB.image.source} alt={socialMedias.GITHUB.image.alt} /></a>
                    <a href={socialMedias.LINKEDIN.url} target="_blank"><img src={socialMedias.LINKEDIN.image.source} alt={socialMedias.LINKEDIN.image.alt} /></a>
                    <a href={socialMedias.INSTAGRAM.url} target="_blank"><img src={socialMedias.INSTAGRAM.image.source} alt={socialMedias.INSTAGRAM.image.alt} /></a>
                    <a href={socialMedias.FACEBOOK.url} target="_blank"><img src={socialMedias.FACEBOOK.image.source} alt={socialMedias.FACEBOOK.image.alt} /></a>
                </Social>
                <Line></Line>
                <Nav>
                    <li><a href="/">Início</a></li>
                    <li><a href="/repositories">Portfólio</a></li>
                    <AtualPage><a href="/resume">Currículo</a></AtualPage>
                </Nav>
            </Bar>
            <Contents>
            <Projects>
                <Title>
                    <h1>{profile.name}</h1>
                </Title>
                <List>
                    <li><a href={profile.html_url} target="_blank">Github</a></li>
                    <li><a href={profile.blog} target="_blank">LinkedIn</a></li>
                </List>
            </Projects>
            </Contents>
        </Container>
    );
}