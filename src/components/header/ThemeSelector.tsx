import { Moon, Sun } from "lucide-react";
import { ReactNode } from "react";
import useTheme from "../../api/useTheme";

export default function ThemeSelector(): ReactNode {
  const [theme, toggleTheme] = useTheme()
  const changeThemeButtonsClassname = "text-primary-text"

  return (
    <button onClick={toggleTheme} className="cursor-pointer p-1 rounded hover:bg-hover">
      {theme === "dark" ? <Sun className={changeThemeButtonsClassname} /> : <Moon className={changeThemeButtonsClassname} />}
    </button>
  )
}