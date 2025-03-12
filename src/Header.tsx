import { Moon, Sun } from "lucide-react";
import { ReactNode } from "react";
import useTheme from "./useTheme";

export default function Header(): ReactNode {
  const [theme, toggleTheme] = useTheme()

  const changeThemeButtonsClassname = "text-primary-text"

  return (
    <header className="w-full flex justify-between p-4 text-secondary-text font-semibold">
      <div className="flex gap-4">
        <nav>home</nav>
        <nav>projects</nav>
        <nav>contact</nav>
      </div>
      <div>
        <button onClick={toggleTheme} className="cursor-pointer p-1 rounded hover:bg-hover">
          {theme === "dark" ? <Sun className={changeThemeButtonsClassname} /> : <Moon className={changeThemeButtonsClassname} />}
        </button>
      </div>
    </header>
  )
}