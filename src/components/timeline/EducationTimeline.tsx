import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { educationExperiences } from "../../api/education";
import Timeline, { TimelineEntryData } from "./Timeline";

export default function EducationTimeline(): ReactNode {
  const { t } = useTranslation()

  const educationEntries: TimelineEntryData[] = educationExperiences.map(({ name, startDate, endDate, url }) => {
    return {
      id: name,
      title: t(`education.${name}.course_name`),
      subTitle: t(`education.${name}.instituition_name`),
      startDate,
      endDate,
      imgSrc: `/instituitions/${name}.jpg`,
      url: url,
    };
  })

  return (
    <Timeline entries={educationEntries} />
  )
}