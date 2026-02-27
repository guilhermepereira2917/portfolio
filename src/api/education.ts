export interface Education {
  name: string,
  startDate: Date,
  endDate: Date,
  url: string,
}

export const educationExperiences: Education[] = [
  {
    name: "uri",
    startDate: new Date(2022, 0),
    endDate: new Date(2026, 11),
    url: "https://www.uricer.edu.br/site/",
  },
  {
    name: "ifrs",
    startDate: new Date(2019, 0),
    endDate: new Date(2021, 11),
    url: "https://ifrs.edu.br",
  },
]