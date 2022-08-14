import { useEffect, useState } from "react";
import { api } from "../../service/api";
import GitHubUrl from "../../assets/github.svg"
import linkedInUrl from "../../assets/linkedin.svg"
import InstagramUrl from "../../assets/instagram.svg"
import FacebookUrl from "../../assets/facebook.svg"
import { AtualPage, Bar, Bio, Container, Contents, Line, Name, Nav, Projects, Social } from "./Style";

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

export const socialMedias = {
    GITHUB: {
        title: "GitHub",
        image: {
            source: GitHubUrl,
            alt: "Perfil GitHub",
        },
        url: "https://github.com/NewLeonardooliv"
    },
    LINKEDIN: {
        title: "LinkedIn",
        image: {
            source: linkedInUrl,
            alt: "Perfil LinkedIn",
        },
        url: "https://www.linkedin.com/in/leonardooliv/"
    },
    INSTAGRAM: {
        title: "Instagram",
        image: {
            source: InstagramUrl,
            alt: "Perfil Instagram",
        },
        url: "https://www.instagram.com/leonardooliv_/"
    },
    FACEBOOK: {
        title: "Facebook",
        image: {
            source: FacebookUrl,
            alt: "Perfil Facebook",
        },
        url: "https://www.facebook.com/profile.php?id=100003701469668"
    },
};

export function ProfilePage() {
    const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        document.title = 'Home · ProfilePage';

        api.get("/users/NewLeonardooliv").then(response => {
            setProfile(response.data);
        })

        api.get("/users/NewLeonardooliv/repos").then(response => {
            setProjects(response.data);
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
                    <AtualPage><a href="/">Início</a></AtualPage>
                    <li><a href="/repositories">Portfólio</a></li>
                    <li><a href="/resume">Currículo</a></li>
                </Nav>
                <Line></Line>
            </Bar>
            <Contents>
                {projects.map((item: any) => (
                    <Projects>
                        <h1>{item.name}</h1>
                        <h2>{item.description}</h2>
                    </Projects>
                ))}
            </Contents>
        </Container>
    );
}