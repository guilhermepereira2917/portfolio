import { SiGithub, SiGitlab } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";
import { ReactNode } from "react";

interface ContactLinkProps {
  href: string,
  icon: ReactNode,
}

function ContactLink({ href, icon }: ContactLinkProps): ReactNode {
  return (
    <a href={href} target="_blank" className="text-secondary-text">{icon}</a>
  )
}

export function GithubLink(): ReactNode {
  return <ContactLink href="https://github.com/guilhermepereira2917" icon={<SiGithub />} />
}

export function GitlabLink(): ReactNode {
  return <ContactLink href="https://gitlab.com/guilhermepereira2917" icon={<SiGitlab />} />
}

export function LinkedinLink(): ReactNode {
  return <ContactLink href="https://www.linkedin.com/in/guilherme-pereira-0b77b8245/" icon={<Linkedin />} />
}