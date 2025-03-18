import { SiAmazonwebservices, SiCoffeescript, SiKotlin, SiNextdotjs, SiPostgresql, SiReact, SiSpring, SiTailwindcss, SiTypescript, SiVite } from "@icons-pack/react-simple-icons";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import TechonologiesEnum from "../../api/technologies";

const iconSize = 14
const technologiesIcons = new Map<TechonologiesEnum, ReactNode>([
  [TechonologiesEnum.JAVA, <SiCoffeescript size={iconSize} />],
  [TechonologiesEnum.SPRING, <SiSpring size={iconSize} />],
  [TechonologiesEnum.TYPESCRIPT, <SiTypescript size={iconSize} />],
  [TechonologiesEnum.VITE, <SiVite size={iconSize} />],
  [TechonologiesEnum.TAILWIND, <SiTailwindcss size={iconSize} />],
  [TechonologiesEnum.AWS, <SiAmazonwebservices size={iconSize} />],
  [TechonologiesEnum.NEXT, <SiNextdotjs size={iconSize} />],
  [TechonologiesEnum.KOTLIN, <SiKotlin size={iconSize} />],
  [TechonologiesEnum.REACT, <SiReact size={iconSize} />],
  [TechonologiesEnum.POSTGRE, <SiPostgresql size={iconSize} />],
])

interface TechonologyCardProps {
  technology: TechonologiesEnum,
}

export default function TechonologyCard({ technology }: TechonologyCardProps): ReactNode {
  const icon = technologiesIcons.get(technology);
  if (!icon) return null;

  const { t } = useTranslation()

  return (
    <div className="flex items-center justify-center gap-1 w-min px-2 py-0.5 bg-hover text-primary-text rounded">
      {icon}
      <span className="text-xs font-medium">{t(`technology.${technology}`)}</span>
    </div>
  );
}