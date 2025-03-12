import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getStoredTheme(): Theme {
  const selectedTheme = localStorage.getItem("theme");
  if (selectedTheme === "dark" || selectedTheme === "light") {
    return selectedTheme;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

export function useTheme(): [ theme: Theme, toggleTheme: () => void ] {
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return [
    theme,
    toggleTheme,
  ];
}
