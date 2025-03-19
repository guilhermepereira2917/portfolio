import { ReactNode } from "react";
import Wrapper from "../components/common/Wrapper";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Projects from "../components/project/Projects";

export default function ProjectsPage(): ReactNode {
  return (
    <Wrapper>
      <Header />
      <Projects />
      <Footer />
    </Wrapper>
  )
}