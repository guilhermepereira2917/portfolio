import { ReactNode } from "react";
import Contact from "../contact/Contact";

export default function Footer(): ReactNode {
  return (
    <footer className="flex flex-wrap sm:justify-between justify-center gap-4 items-center p-4 mt-8">
      <a href="/" className="text-sm text-secondary-text">guilhermepereiradev.com</a>
      <Contact />
    </footer>
  )
}