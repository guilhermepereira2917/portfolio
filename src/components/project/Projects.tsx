import { ReactNode } from "react";
import SectionHeading from "../common/SectionHeading";
import { Project, projects } from "../../api/projects";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

interface ProjectsProps {
  show?: number,
}

export default function Projects({ show }: ProjectsProps): ReactNode {
  const { t } = useTranslation()

  let projectsToShow = projects
  if (show) {
    projectsToShow = projectsToShow.filter((_, index) => index < show)
  }

  return (
    <>
      <div className="flex justify-between items-end pr-4">
        <SectionHeading langKey="projects.heading" className="mt-4" />
        {show && (
          <NavLink to="/projects" className="text-secondary-text hover:text-primary-text hover:transition-all">
            {t("projects.view_more") + " ->"}
          </NavLink>
        )}
      </div>

      <section className="grid sm:grid-cols-2 grid-cols-1 gap-4 mx-4 mt-2">
        {projectsToShow.map((project: Project): ReactNode => {
          return <ProjectCard project={project} key={project.name} />
        })}
      </section>
    </>
  )
}
