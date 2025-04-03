export interface WorkExperience {
  name: string,
  startDate: Date,
  endDate: Date,
  url: string,
}

export const workExperiences: WorkExperience[] = [
  {
    name: "agro1",
    startDate: new Date("Nov 2023"),
    endDate: new Date("Jul 2024"),
    url: "https://agro1.inf.br",
  },
  {
    name: "system",
    startDate: new Date("May 2022"),
    endDate: new Date("Oct 2023"),
    url: "https://www.systempro.com.br",
  },
]