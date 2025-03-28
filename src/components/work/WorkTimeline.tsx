import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { WorkExperience, workExperiences } from "../../api/workExperiences";
import SectionHeading from "../common/SectionHeading";

export default function WorkTimeline(): ReactNode {
  return (
    <>
      <SectionHeading langKey="work.heading" />
      <section className="relative mx-4 mt-2 border-2 border-hover rounded">
        <div className="absolute w-[1px] top-0 bottom-0 ml-[42px] -z-10 bg-hover" />
        {workExperiences.map((workExperience: WorkExperience): ReactNode => {
          return <WorkComponent workExperience={workExperience} key={workExperience.name} />
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

  const { name, startDate, endDate, url } = workExperience
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

  const dateTimeFormat = i18n.language == "en" ?
    new Intl.DateTimeFormat("en-us", { month: "short", year: "numeric" }) :
    new Intl.DateTimeFormat("pt", { month: "long", year: "numeric" })

  const startFormattedDate = dateTimeFormat.format(startDate);
  const endFormattedDate = dateTimeFormat.format(endDate);

  return (
    <div className="m-4 flex">
      <a href={url} target="_blank" className="size-[52px] aspect-square cursor-pointer">
        <img src={imgSrc} className="rounded-full aspect-square" />
      </a>

      <div className="ml-6">
        <h3 className="text-xs text-secondary-text first-letter:capitalize">
          <span className="inline-block first-letter:capitalize">{startFormattedDate}</span> - <span className="inline-block first-letter:capitalize">{endFormattedDate}</span>
        </h3>

        <h2 className="text-sm">{t(`work.${name}.job_title`)}</h2>
        <h2 className="text-sm text-secondary-text">{t(`work.${name}.company_name`)}</h2>

        <ul className="mt-2 ml-4 pr-8 list-disc text-hei">
          {buletPoints.map((buletPoint: string, index: number): ReactNode => {
            return (
              <li key={index} className="text-tertiary-text text-sm/5">{buletPoint}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}