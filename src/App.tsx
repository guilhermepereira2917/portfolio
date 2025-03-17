import Header from "./components/Header"
import Intro from "./components/Intro"
import Projects from "./components/project/Projects"
import WorkTimeline from "./components/work/WorkTimeline"

export default function App() {
  return (
    <div className="w-[660px] max-w-screen text-primary-text">
      <Header />
      <Intro />
      <WorkTimeline />
      <Projects />
    </div>
  )
}