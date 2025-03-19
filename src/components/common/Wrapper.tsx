import { ReactNode } from "react";

export default function Wrapper({ children }: any): ReactNode {
  return <div className="w-[660px] max-w-screen text-primary-text">{children}</div>
}