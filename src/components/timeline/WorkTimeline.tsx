import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { workExperiences } from "../../api/workExperiences";
import Timeline, { TimelineEntryData } from "./Timeline";

export default function WorkTimeline(): ReactNode {
  const { t, i18n } = useTranslation()

  const workEntries: TimelineEntryData[] = workExperiences.map(({ name, startDate, endDate, url }) => {
    const bulletPoints: string[] = []
    for (let i = 1; i18n.exists(`work.${name}.bullet_point_${i}`); i++) {
      bulletPoints.push(t(`work.${name}.bullet_point_${i}`));
    }

    return {
      id: name,
      title: t(`work.${name}.job_title`),
      subTitle: t(`work.${name}.company_name`),
      startDate,
      endDate,
      imgSrc: `/companies/${name}.jpg`,
      url,
      bulletPoints,
    };
  })

  return (
    <Timeline entries={workEntries} />
  )
}