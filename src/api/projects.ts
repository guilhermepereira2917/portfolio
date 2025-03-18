import TechonologiesEnum from "./technologies"

export interface Project {
  name: string,
  sourceUrl: string,
  technologies: TechonologiesEnum[],
}

export const projects: Project[] = [
  {
    name: "url_shortener",
    sourceUrl: "https://github.com/guilhermepereira2917/url-shortener",
    technologies: [
      TechonologiesEnum.JAVA,
      TechonologiesEnum.SPRING,
      TechonologiesEnum.POSTGRE,
      TechonologiesEnum.TYPESCRIPT,
      TechonologiesEnum.VITE,
      TechonologiesEnum.REACT,
      TechonologiesEnum.TAILWIND,
      TechonologiesEnum.AWS,
    ]
  },
  {
    name: "chess",
    sourceUrl: "https://github.com/guilhermepereira2917/spring-chess",
    technologies: [
      TechonologiesEnum.JAVA,
      TechonologiesEnum.SPRING,
      TechonologiesEnum.TYPESCRIPT,
      TechonologiesEnum.REACT,
      TechonologiesEnum.NEXT,
      TechonologiesEnum.TAILWIND,
    ]
  },
  {
    name: "cobblemon",
    sourceUrl: "https://gitlab.com/cable-mc/cobblemon",
    technologies: [
      TechonologiesEnum.JAVA,
      TechonologiesEnum.KOTLIN,
    ]
  }
]