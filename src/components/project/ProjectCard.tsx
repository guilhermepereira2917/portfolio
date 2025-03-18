import { GithubIcon } from "lucide-react";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Project } from "../../api/projects";
import TechonologiesEnum from "../../api/technologies";
import TechonologyCard from "./TechnologyCard";

interface ProjectCardProps {
  project: Project,
}

export default function ProjectCard({ project }: ProjectCardProps): ReactNode {
  const { t } = useTranslation()
  const { name, sourceUrl, technologies } = project

  return (
    <div className="flex flex-col box-border basis-1/2 p-4 pb-2 bg-background border-2 border-hover rounded">
      <div className="flex items-center h-40">
        <img src={`/projects/${name}.png`} className="p-4 m-auto max-h-40" />
      </div>
      <h3 className="text-primary-text text-bold">{t(`project.${name}.name`)}</h3>
      <p className="text-xs text-secondary-text">{t(`project.${name}.description`)}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        {technologies.map((technology: TechonologiesEnum): ReactNode => {
          return (
            <div key={technology}><TechonologyCard technology={technology} /></div>
          )
        })}
      </div>
      <div className="grow" />
      <a className="inline-flex items-center w-min bg-primary-text text-xs text-background font-bold py-1 px-2 mt-4 rounded cursor-pointer" href={sourceUrl} target="_blank">
        <GithubIcon size={14} className="mr-1" /> {t("projects.source")}
      </a>
    </div>
  )
}