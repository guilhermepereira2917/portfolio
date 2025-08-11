import TechonologiesEnum from "./technologies"

export interface Project {
  name: string,
  sourceUrl?: string,
  tryItOutUrl?: string,
  technologies: TechonologiesEnum[],
}

export const projects: Project[] = [
  {
    name: "med_summaries",
    tryItOutUrl: "https://med-summaries.com",
    technologies: [
      TechonologiesEnum.TYPESCRIPT,
      TechonologiesEnum.EXPRESS,
      TechonologiesEnum.REACT,
      TechonologiesEnum.NEXT,
      TechonologiesEnum.STRIPE,
      TechonologiesEnum.FIREBASE,
    ]
  },
  {
    name: "cobblemon",
    sourceUrl: "https://gitlab.com/cable-mc/cobblemon/-/merge_requests/?sort=created_date&state=merged&author_username=guilhermepereira2917&first_page_size=20",
    tryItOutUrl: "https://cobblemon.com",
    technologies: [
      TechonologiesEnum.JAVA,
      TechonologiesEnum.KOTLIN,
      TechonologiesEnum.OPEN_SOURCE,
    ]
  },
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
    name: "image_processing",
    sourceUrl: "https://github.com/guilhermepereira2917/image-processing",
    tryItOutUrl: "https://image-processing.guilhermepereiradev.com",
    technologies: [
      TechonologiesEnum.TYPESCRIPT,
      TechonologiesEnum.VITE,
      TechonologiesEnum.REACT,
      TechonologiesEnum.TAILWIND,
      TechonologiesEnum.AWS,
    ]
  },
  {
    name: "webfishing",
    sourceUrl: "https://github.com/guilhermepereira2917/webfishing",
    tryItOutUrl: "https://webfishing.guilhermepereiradev.com",
    technologies: [
      TechonologiesEnum.TYPESCRIPT,
      TechonologiesEnum.VITE,
      TechonologiesEnum.REACT,
      TechonologiesEnum.TAILWIND,
      TechonologiesEnum.AWS,
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