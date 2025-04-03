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
    <header className="sticky top-0 z-50 bg-background/75 backdrop-blur-sm w-full flex justify-between p-4 text-secondary-text font-semibold">
      <nav className="flex sm:gap-4 gap-2 items-center">
        <NavLink to="/" className={className}>{t("header.home")}</NavLink>
        <NavLink to="/projects" className={className}>{t("header.projects")}</NavLink>
        <NavLink to="/contact" className={className}>{t("header.contact")}</NavLink>
      </nav>
      <div className="flex sm:gap-4 gap-1">
        <LanguageSelector />
        <ThemeSelector />
      </div>
    </header>
  )
}