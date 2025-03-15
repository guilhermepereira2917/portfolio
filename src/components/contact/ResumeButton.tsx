import { FileUser } from "lucide-react";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export default function ResumeButton(): ReactNode {
  const { t, i18n } = useTranslation()

  const handleDownload = async () => {
    const resumeToDownload = `/resumes/${i18n.language}.pdf`
    const a = document.createElement("a");
    a.href = resumeToDownload;
    a.download = t("contact.resume_file_name");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <button onClick={handleDownload} className="text-sm items-center flex cursor-pointer border-2 border-hover py-1 px-4 rounded">
      {t("contact.resume")} <FileUser className="size-5 ml-2" />
    </button>
  )
}