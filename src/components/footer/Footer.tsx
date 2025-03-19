import { ReactNode } from "react";
import Contact from "../contact/Contact";

export default function Footer(): ReactNode {
  return (
    <footer className="flex justify-between items-center p-4 mt-8">
      <a href="/" className="text-sm text-secondary-text">guilhermepereira.dev</a>
      <Contact />
    </footer>
  )
}