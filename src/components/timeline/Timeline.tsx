import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export interface TimelineEntryData {
  id: string,
  imgSrc: string,
  startDate: Date,
  endDate: Date,
  title: string,
  subTitle: string,
  bulletPoints?: string[],
  url?: string,
}

interface TimelineProps {
  entries: TimelineEntryData[],
}

export default function Timeline({ entries }: TimelineProps): ReactNode {
  return (
    <>
      <section className="relative mx-4 mt-2 border-2 border-hover rounded">
        <div className="absolute w-[1px] top-0 bottom-0 ml-[42px] -z-10 bg-hover" />
        {entries.map((entry: TimelineEntryData): ReactNode => {
          return <TimelineEntry data={entry} key={entry.id} />
        })}
      </section>
    </>
  )
}

interface TimelineEntryProps {
  data: TimelineEntryData
}

function TimelineEntry({ data }: TimelineEntryProps): ReactNode {
  const { i18n } = useTranslation()

  const { imgSrc, title, subTitle, startDate, endDate, bulletPoints, url } = data

  const dateTimeFormat = i18n.language == "en" ?
    new Intl.DateTimeFormat("en-us", { month: "short", year: "numeric" }) :
    new Intl.DateTimeFormat("pt", { month: "long", year: "numeric" })

  const startFormattedDate = dateTimeFormat.format(startDate);
  const endFormattedDate = dateTimeFormat.format(endDate);

  return (
    <div className="m-4 flex">
      <a href={url} target="_blank" className="size-[52px] aspect-square">
        <img src={imgSrc} className="rounded-full aspect-square" />
      </a>

      <div className="ml-6">
        <h3 className="text-xs text-secondary-text first-letter:capitalize">
          <span className="inline-block first-letter:capitalize">{startFormattedDate}</span> - <span className="inline-block first-letter:capitalize">{endFormattedDate}</span>
        </h3>

        <h2 className="text-sm">{title}</h2>

        <h2 className="text-sm text-secondary-text">
          <a href={url} target="_blank" className="hover:underline leading-none">{subTitle}</a>
        </h2>

        {bulletPoints &&
          <ul className="mt-2 ml-4 pr-8 list-disc text-hei">
            {bulletPoints.map((bulletPoint: string, index: number): ReactNode => {
              return (
                <li key={index} className="text-tertiary-text text-sm/5">{bulletPoint}</li>
              )
            })}
          </ul>
        }
      </div>
    </div>
  )
}