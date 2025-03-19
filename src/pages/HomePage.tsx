import { ReactNode } from "react"
import Header from "../components/header/Header"
import Intro from "../components/Intro"
import Projects from "../components/project/Projects"
import WorkTimeline from "../components/work/WorkTimeline"
import Wrapper from "../components/common/Wrapper"
import Footer from "../components/footer/Footer"

export default function HomePage(): ReactNode {
  return (
    <Wrapper>
      <Header />
      <Intro />
      <WorkTimeline />
      <Projects show={2} />
      <Footer />
    </Wrapper>
  )
}