import { ReactNode } from "react"
import Wrapper from "../components/common/Wrapper"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Intro from "../components/Intro"
import Projects from "../components/project/Projects"
import WorkAndEducationSwitcher from "../components/timeline/WorkAndEducationSwitcher"

export default function HomePage(): ReactNode {
  return (
    <Wrapper>
      <Header />
      <Intro />
      <WorkAndEducationSwitcher />
      <Projects show={2} />
      <Footer />
    </Wrapper>
  )
}