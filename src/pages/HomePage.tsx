import { ReactNode } from "react"
import Header from "../components/Header"
import Intro from "../components/Intro"
import Projects from "../components/project/Projects"
import WorkTimeline from "../components/work/WorkTimeline"
import Wrapper from "../components/Wrapper"

export default function HomePage(): ReactNode {
  return (
    <Wrapper>
      <Header />
      <Intro />
      <WorkTimeline />
      <Projects show={2} />
    </Wrapper>
  )
}