import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, NavLinkRenderProps } from "react-router";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";

export default function Header(): ReactNode {
  const { t } = useTranslation();

  const className = ({ isActive }: NavLinkRenderProps) => {
    return `${isActive ? "text-primary-text" : "text-secondary-text"} hover:text-primary-text hover:transition-all`
  }

  return (
    <header className="sticky top-0 z-50 bg-background w-full flex justify-between p-4 text-secondary-text font-semibold">
      <div className="flex gap-4 items-center">
        <NavLink to="/" className={className}>{t("header.home")}</NavLink>
        <NavLink to="/projects" className={className}>{t("header.projects")}</NavLink>
        <NavLink to="/contact" className={className}>{t("header.contact")}</NavLink>
      </div>
      <div className="flex gap-4">
        <LanguageSelector />
        <ThemeSelector />
      </div>
    </header>
  )
}