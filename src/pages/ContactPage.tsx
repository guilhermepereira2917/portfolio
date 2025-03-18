import { ReactNode } from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage(): ReactNode {
  return (
    <Wrapper>
      <Header />
      <ContactForm />
    </Wrapper>
  )
}