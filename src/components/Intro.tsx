import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Contact from "./contact/Contact";

export default function Intro(): ReactNode {
  const { t } = useTranslation()

  return (
    <section className="p-4 flex flex-col gap-2">
      <h1 className="text-4xl font-extrabold mb-2">{t("intro.greeting")} 👋</h1>
      <p>{t("intro.intro")}</p>
      <p>{t("intro.about_me")}</p>

      <Contact />
    </section>
  )
}