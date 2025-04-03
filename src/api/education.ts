export interface Education {
  name: string,
  startDate: Date,
  endDate: Date,
  url: string,
}

export const educationExperiences: Education[] = [
  {
    name: "uri",
    startDate: new Date("Jan 2022"),
    endDate: new Date("Dec 2025"),
    url: "https://www.uricer.edu.br/site/",
  },
  {
    name: "ifrs",
    startDate: new Date("Jan 2019"),
    endDate: new Date("Dec 2021"),
    url: "https://ifrs.edu.br",
  },
]