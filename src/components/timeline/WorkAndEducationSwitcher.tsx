import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import EducationTimeline from "./EducationTimeline";
import WorkTimeline from "./WorkTimeline";

export default function WorkAndEducationSwitcher(): ReactNode {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { t } = useTranslation()

  const buttonData = [
    { label: t("work.heading"), component: <WorkTimeline /> },
    { label: t("education.heading"), component: <EducationTimeline /> },
  ];

  const baseClass = "cursor-pointer w-full font-bold p-1";
  const selectedClass = "bg-background rounded";
  const notSelectedClass = "text-secondary-text";

  return (
    <>
      <div className="flex justify-evenly mx-4 p-1 text-sm rounded bg-hover">
        {buttonData.map((item, index) => (
          <button
            key={index}
            className={`${baseClass} ${selectedIndex === index ? selectedClass : notSelectedClass}`}
            onClick={() => setSelectedIndex(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {buttonData[selectedIndex].component}
    </>
  )
}