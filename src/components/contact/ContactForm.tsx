import { FormEvent, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

const API_KEY = "75bfa7e2-3204-4def-8140-bf4cdac7e0d9"

export default function ContactForm(): ReactNode {
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)
    setResult("")

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    formData.append("access_key", API_KEY)

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then(async (response: Response) => {
        const data = await response.json()
        if (data.success) {
          setResult("contact.thanks")
          form.reset()
        } else {
          setResult("contact.error")
        }
      })
      .catch(() => {
        setResult("contact.error")
      })
      .finally(() => {
        setLoading(false)
      })
  };

  const inputClassName = "outline-2 outline-hover rounded p-2 focus:outline-1 focus:outline-primary-text"

  return (
    <div className="p-4">
      <h1 className="text-4xl font-extrabold mb-2">{t("contact.heading")}</h1>
      <form onSubmit={onSubmit} className="text-sm">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Name" className={inputClassName} required />
          <input type="email" name="email" placeholder="Email" className={inputClassName} required />
        </div>
        <textarea rows={8} name="message" placeholder="Leave feedback about the site, send job opportunities or just say hello!" className={`w-full mt-4 ${inputClassName}`} required></textarea>

        <input type="checkbox" name="botcheck" className="hidden" />

        <button
          type="submit"
          disabled={loading}
          className={`font-semibold mt-4 p-2 w-full bg-primary-text text-background rounded ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          {t(`contact.${loading ? "loading" : "send_message"}`)}
        </button>
      </form>

      {result && <span className="inline-block w-full text-center text-secondary-text text-sm">{t(result)}</span>}
    </div>
  );
}