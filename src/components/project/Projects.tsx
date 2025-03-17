import { ReactNode } from "react";
import SectionHeading from "../common/SectionHeading";
import { Project, projects } from "../../api/projects";
import ProjectCard from "./ProjectCard";

export default function Projects(): ReactNode {
  return (
    <>
      <SectionHeading langKey="projects.heading" className="mt-4" />
      <section className="flex flex-row gap-2 mx-4 mt-2">
        {projects.map((project: Project): ReactNode => {
          return <ProjectCard project={project} />
        })}
      </section>
    </>
  )
}
