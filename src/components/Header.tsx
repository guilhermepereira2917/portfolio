import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";

export default function Header(): ReactNode {
  const { t } = useTranslation();

  return (
    <header className="w-full flex justify-between p-4 text-secondary-text font-semibold">
      <div className="flex gap-4">
        <nav>{t("header.home")}</nav>
        <nav>{t("header.projects")}</nav>
        <nav>{t("header.contact")}</nav>
      </div>
      <div className="flex gap-4">
        <LanguageSelector />
        <ThemeSelector />        
      </div>
    </header>
  )
}