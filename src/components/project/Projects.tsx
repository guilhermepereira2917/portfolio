import { ReactNode } from "react";
import SectionHeading from "../common/SectionHeading";
import { Project, projects } from "../../api/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  show?: number,
}

export default function Projects({ show }: ProjectsProps): ReactNode {
  let projectsToShow = projects
  if (show) {
    projectsToShow = projectsToShow.filter((_, index) => index < show)
  }
  
  return (
    <>
      <SectionHeading langKey="projects.heading" className="mt-4" />
      <section className="grid grid-cols-2 gap-4 mx-4 mt-2">
        {
          projectsToShow.map((project: Project): ReactNode => {
            return <ProjectCard project={project} />
          })}
      </section>
    </>
  )
}
