import { useEffect, useState } from "react";
import { Container, Contents } from "./Style";
import { ProjectsList } from "../../components/ProjectsList";
import { getProfile, getProjects } from "./services";
import { socialMedias } from "./Const";
import { TitlePage } from "../../helpers/helpers";
import { Menu } from "../../components/Menu";

export function ProfilePage(): JSX.Element {
    const [profile, setProfile] = useState(Object);
    const [project, setProjects] = useState([]);

    TitlePage('Home · ProfilePage');

    useEffect(() => {
        getMyProfile("/users/NewLeonardooliv");
        getMyProjects("/users/NewLeonardooliv/repos")
    }, []);

    async function getMyProfile(profileLogin: string) {
        const { data } = await getProfile(profileLogin);
        setProfile(data)
    }

    async function getMyProjects(profileLogin: string) {
        const { data } = await getProjects(profileLogin);
        setProjects(data)
    }
    return (
        <Container>
            <Menu profile={profile} socialMedias={socialMedias} />
            <Contents>
                <ProjectsList projects={project} />
            </Contents>
        </Container>
    );
}