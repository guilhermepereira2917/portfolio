import { ReactNode } from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Projects from "../components/project/Projects";

export default function ProjectsPage(): ReactNode {
  return (
    <Wrapper>
      <Header />
      <Projects />
    </Wrapper>
  )
}