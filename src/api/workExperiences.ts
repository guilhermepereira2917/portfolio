export interface WorkExperience {
  name: string,
  startDate: Date,
  endDate?: Date,
  url: string,
}

export const workExperiences: WorkExperience[] = [
  {
    name: "tmr",
    startDate: new Date(2026, 1),
    url: "https://tmrti.com.br/",
  },
  {
    name: "oystr",
    startDate: new Date(2025, 8),
    endDate: new Date(2026, 0),
    url: "https://oystr.com.br",
  },
  {
    name: "agro1",
    startDate: new Date(2023, 10),
    endDate: new Date(2024, 6),
    url: "https://agro1.inf.br",
  },
  {
    name: "system",
    startDate: new Date(2022, 4),
    endDate: new Date(2023, 9),
    url: "https://www.systempro.com.br",
  },
]