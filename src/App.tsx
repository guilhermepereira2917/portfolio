import Header from "./components/Header"
import Intro from "./components/Intro"
import WorkTimeline from "./components/work/WorkTimeline"

export default function App() {
  return (
    <div className="w-1/3 container text-primary-text">
      <Header />
      <Intro />
      <WorkTimeline />
    </div>
  )
}