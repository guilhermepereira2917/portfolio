import { ReactNode } from "react";
import { GithubLink, GitlabLink, LinkedinLink } from "./ContactLink";
import ResumeButton from "./ResumeButton";

export default function Contact(): ReactNode {
  return (
    <div className="flex items-center gap-4 mt-2">
      <ResumeButton />
      <GithubLink />
      <GitlabLink />
      <LinkedinLink />
    </div>
  )
}