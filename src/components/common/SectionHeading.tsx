import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface SectionHeadingProps {
  langKey: string,
  className?: string,
}

export default function SectionHeading({ langKey, className }: SectionHeadingProps): ReactNode {
  const { t } = useTranslation()

  return <h1 className={`ml-4 font-bold text-2xl ${className}`}>{t(langKey)}</h1>;
}
