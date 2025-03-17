import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { WorkExperience, workExperiences } from "../../api/workExperiences";
import SectionHeading from "../common/SectionHeading";

export default function WorkTimeline(): ReactNode {
  return (
    <>
      <SectionHeading langKey="work.heading" />
      <section className="relative mx-4 mt-2 border-2 border-hover rounded">
        <div className="absolute w-[1px] top-0 bottom-0 ml-[40px] -z-10 bg-hover" />
        {workExperiences.map((workExperience: WorkExperience): ReactNode => {
          return <WorkComponent workExperience={workExperience} />
        })}
      </section>
    </>
  )
}

interface WorkComponentProps {
  workExperience: WorkExperience,
}

function WorkComponent({ workExperience }: WorkComponentProps): ReactNode {
  const { t, i18n } = useTranslation()

  const name = workExperience.name
  const imgSrc = `/companies/${name}.jpg`

  const buletPoints = []
  var currentBuletPoint = 1
  while (true) {
    const buletPointLang = `work.${name}.bulet_point_${currentBuletPoint++}`
    if (!i18n.exists(buletPointLang)) {
      break;
    }

    buletPoints.push(t(buletPointLang))
  }

  const startFormattedDate = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(workExperience.startDate);
  const endFormattedDate = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(workExperience.endDate);

  return (
    <div className="m-4 flex">
      <img src={imgSrc} className="rounded-full size-12" />

      <div className="ml-6">
        <h3 className="text-xs text-secondary-text">{startFormattedDate} - {endFormattedDate}</h3>
        <h2 className="text-sm">{t(`work.${name}.job_title`)}</h2>
        <h2 className="text-sm text-secondary-text">{t(`work.${name}.company_name`)}</h2>

        <ul className="mt-2 ml-4 pr-8 list-disc text-hei">
          {buletPoints.map((buletPoint: string): ReactNode => {
            return (
              <li className="text-tertiary-text text-sm/5">{buletPoint}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}