import { ReactNode } from "react";
import { GithubLink, GitlabLink, LinkedinLink, MailToLink } from "./ContactLink";
import ResumeButton from "./ResumeButton";

interface ContactProps {
  classname?: string,
  showResumeButton?: boolean,
}

export default function Contact({ classname, showResumeButton }: ContactProps): ReactNode {
  return (
    <div className={`${classname} flex items-center gap-4`}>
      {showResumeButton && <ResumeButton />}
      <GithubLink />
      <GitlabLink />
      <LinkedinLink />
      <MailToLink />
    </div>
  )
}