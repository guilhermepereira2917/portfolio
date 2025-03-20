import TechonologiesEnum from "./technologies"

export interface Project {
  name: string,
  sourceUrl: string,
  tryItOutUrl?: string,
  technologies: TechonologiesEnum[],
}

export const projects: Project[] = [
  {
    name: "url_shortener",
    sourceUrl: "https://github.com/guilhermepereira2917/url-shortener",
    tryItOutUrl: "https://url-shortener.guilhermepereiradev.com",
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
    tryItOutUrl: "https://cobblemon.com",
    technologies: [
      TechonologiesEnum.JAVA,
      TechonologiesEnum.KOTLIN,
      TechonologiesEnum.OPEN_SOURCE,
    ]
  },
  {
    name: "portfolio",
    sourceUrl: "https://github.com/guilhermepereira2917/portfolio",
    technologies: [
      TechonologiesEnum.TYPESCRIPT,
      TechonologiesEnum.VITE,
      TechonologiesEnum.REACT,
      TechonologiesEnum.TAILWIND,
      TechonologiesEnum.AWS,
    ]
  }
]