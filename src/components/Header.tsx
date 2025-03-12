import { ReactNode } from "react";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";

export default function Header(): ReactNode {
  return (
    <header className="w-full flex justify-between p-4 text-secondary-text font-semibold">
      <div className="flex gap-4">
        <nav>home</nav>
        <nav>projects</nav>
        <nav>contact</nav>
      </div>
      <div className="flex gap-4">
        <LanguageSelector />
        <ThemeSelector />        
      </div>
    </header>
  )
}