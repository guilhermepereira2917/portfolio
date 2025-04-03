import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "./contact/Contact";

export default function Intro(): ReactNode {
  const [readMore, setReadMore] = useState(false)
  const { t } = useTranslation()

  return (
    <section className="p-4 flex flex-col gap-2">
      <h1 className="text-4xl font-extrabold mb-2">{t("intro.greeting")} 👋</h1>
      <p className="text-secondary-text">{t("intro.intro")}</p>
      <p className="leading-snug">
        {t("intro.about_me")} <br />

        {readMore && <>
          <br />
          {t("intro.more_1")} <br /> <br />
          {t("intro.more_2")} <br /> <br />
          {t("intro.more_3")} <br /> <br />
        </>}

        <span
          className="text-secondary-text hover:cursor-pointer hover:underline"
          onClick={() => setReadMore(value => !value)}
        >
          {t(`intro.${readMore ? 'read_less' : 'read_more'}`)}
        </span>
      </p>

      <button></button>

      <Contact classname="mt-2" showResumeButton={true} />
    </section>
  )
}