import { useTheme } from "./useTheme"

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <>
      <button onClick={toggleTheme}>
          Toggle {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      <h1 className='bg-background text-primary-text'>Hello, world.</h1>
    </>
  )
}