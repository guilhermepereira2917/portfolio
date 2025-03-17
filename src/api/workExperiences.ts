export interface WorkExperience {
  name: string,
  startDate: Date,
  endDate: Date,
  onSite: boolean,
}

export const workExperiences: WorkExperience[] = [
  {
    name: "agro1",
    startDate: new Date("Nov 01, 2023 00:00:00"),
    endDate: new Date("Jul 01, 2024 00:00:00"),
    onSite: false,
  },
  {
    name: "system",
    startDate: new Date("May 01, 2022 00:00:00"),
    endDate: new Date("Oct 01, 2023 00:00:00"),
    onSite: true,
  },
]