import { ProjectsListProps, ProjectsProps } from "./interfaces";
import { Projects } from "./style";

export function ProjectsList({ projects }: ProjectsListProps): JSX.Element {
    return (
        <>
            {projects.map((item: any) => (
                <Projects>
                    <h1>{item.name}</h1>
                    <h2>{item.description}</h2>
                </Projects>
            ))}
        </>
    )
}